"use client";

import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { peopleSelectSchema } from "@/db/schema";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { deletePerson } from "@/db/actions";

export const columns: ColumnDef<z.infer<typeof peopleSelectSchema>>[] = [
  { accessorKey: "name", header: "Name" },
  {
    accessorKey: "birthday",
    header: "Birthday",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const person = row.original;
      return (
        <DropdownMenu>
          <AlertDialog>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className={"h-8 w-8 p-0"}>
                <span className={"sr-only"}>Open Menu</span>
                <MoreHorizontal className={"h-4 w-4"} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href={`/person/${person.id}`}>Edit person</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <AlertDialogTrigger asChild>
                <DropdownMenuItem>Delete person</DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to delete {person.name}?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => deletePerson(person.id)}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenu>
      );
    },
  },
];
