import React from "react";
// import imageUrl from "@/assets/girl-forest.jpg";

// const imageUrl = "photo-1731690415686-e68f78e2b5bd.jpg";

function BookPage() {
  return (
    <div className="space-y-4 md:space-y-8">
      {/* <div className={`bg-[url(${imageUrl})] bg-cover bg-center`}></div> */}
      {/* <div className="bg-[url(/img/girl-forest.jpg)] bg-cover bg-center"></div> */}

      <img
        src="/img/girl-forest.jpg"
        className="rounded max-h-[20rem] w-full object-cover"
        alt=""
      />
      <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>

      <p className="mt-4 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloremque saepe architecto maiores repudiandae amet perferendis
        repellendus, reprehenderit voluptas sequi.
      </p>
    </div>
  );
}

export default BookPage;
