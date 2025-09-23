import { Card, CardContent } from "@/components/ui/card";
import type { Book } from "@/types";
import { Link } from "react-router";

function BookCard({ book }: { book: Book }) {
  return (
    <Card className="group border-none py-0">
      <Link to={`/books/${book.id}`}>
        <img
          alt={book.title}
          src={book.cover || ""}
          className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
        />
        <CardContent className="p-4 ">
          <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            {book.description}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}

export default BookCard;
