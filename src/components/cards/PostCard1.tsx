import React from "react";

type Props = {
    title:string;
    text:string;
    date?:Date;
};

const PostCard1 = (props: Props) => {
  return (
    <>
      <div className="m-10">
        <h1 className="text-gray-500 font-bold text-2xl tracking-wide">
          {props.title}
        </h1>
      </div>
      <div className=" justify-between grid grid-cols-3 gap-6 m-10 mb-10">
        {/* START Card component */}
        <article className="container bg-white shadow-2xl rounded-2xl p-5">
          <h1 className="font-bold text-yellow-500">{props.title}</h1>
          <p className="font-light text-gray-500 hover:font-bold">
            {props.text}
          </p>
          <h6 className="text-sm text-gray-300 mb-5">Published @ {""+props.date}</h6>
          <a
            href="#"
            className="rounded-lg py-2 px-4 text-center text-white bg-yellow-400 hover:bg-yellow-500"
          >
            View More...
          </a>
        </article>
        {/* END Card component */}
      </div>
    </>
  );
};


export default PostCard1;