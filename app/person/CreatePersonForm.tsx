"use client";

import { useForm } from "react-hook-form";
import { peopleInsertSchema } from "@/db/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { createPerson } from "@/db/actions/person";
import Link from "next/link";

export default function CreatePersonForm() {
  const form = useForm<z.infer<typeof peopleInsertSchema>>({
    resolver: zodResolver(peopleInsertSchema),
    defaultValues: {
      name: "",
      birthday: new Date(),
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(createPerson)}
        className={"w-96 flex flex-col items-end gap-y-8"}
      >
        <FormField
          control={form.control}
          name={"name"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>The person's full name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name={"birthday"}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    captionLayout={"dropdown"}
                    mode="single"
                    selected={field.value}
                    defaultMonth={field.value}
                    onSelect={field.onChange}
                    fromDate={new Date("1900-01-01")}
                    toDate={new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>The person's date of birth.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <div className={"flex justify-end items-center gap-4"}>
          <Button variant={"secondary"} asChild>
            <Link href={"/"}>Cancel</Link>
          </Button>
          <Button type="submit">Create person</Button>
        </div>
      </form>
    </Form>
  );
}
