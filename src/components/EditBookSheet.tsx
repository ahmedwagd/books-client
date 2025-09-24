import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useBookContext } from "@/context/BookContext";
import type { Book } from "@/types";

function EditBookSheet({ book }: { book: Book }) {
  const { updateBook } = useBookContext();
  const [title, setTitle] = useState(book.title);
  const [description, setDescription] = useState(book.description);
  const [cover, setCover] = useState(book.cover);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateBook(book.id, { title, description, cover });
    setTitle("");
    setDescription("");
    setCover("");
  };
  return (
    <Sheet>
      <SheetTrigger
        asChild
        // className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 cursor-pointer px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
      >
        <Button
          variant="secondary"
          // className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 cursor-pointer px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
        >
          Edit Book
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your book here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Title</Label>
            <Input 
              id="sheet-demo-name" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Description</Label>
            <Input 
              id="sheet-demo-username" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-cover">Cover</Label>
            <Input 
              id="sheet-demo-cover" 
              value={cover} 
              onChange={(e) => setCover(e.target.value)} 
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <form onSubmit={handleSubmit}>
              <Button type="submit" className="w-full">
                Save changes
              </Button>
            </form>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default EditBookSheet;
