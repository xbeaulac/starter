"use client";

import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { peopleSelectSchema } from "@/db/schema";
// import { deletePerson } from "@/db/actions";

export const columns: ColumnDef<z.infer<typeof peopleSelectSchema>>[] = [
  { accessorKey: "name", header: "Name" },
  {
    accessorKey: "birthday",
    header: "Birthday",
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const person = row.original;
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant={"ghost"} className={"h-8 w-8 p-0"}>
  //             <span className={"sr-only"}>Open Menu</span>
  //             <MoreHorizontal className={"h-4 w-4"} />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent>
  //           <DropdownMenuItem asChild>
  //             <Link href={`/person/${person.id}`}>Edit person</Link>
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem onClick={() => deletePerson(person.id)}>
  //             Delete person
  //           </DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
