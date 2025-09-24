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

function AddBookSheet() {
  const { createBook } = useBookContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createBook({ title, description, cover });
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
          variant="outline"
          className="border border-indigo-600 cursor-pointer text-indigo-600 hover:border-primary hover:text-primary"
          // className="inline-block rounded-sm border border-indigo-600 bg-indigo-600 cursor-pointer px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
        >
          Add Book
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Add new book to the collection</SheetDescription>
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
                Add Book
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

export default AddBookSheet;
