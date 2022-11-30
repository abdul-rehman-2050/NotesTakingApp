import React from "react";
import { MdClose } from "react-icons/md";

type Props = {};

const PostCard3 = (props: Props) => {
  const [render, setRender] = React.useState(true);
  if (!render) return <></>;
  return (
    <div
      className="my-1  p-4  mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
      style={{ cursor: "auto" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          Jan 15, 2022
        </span>
        {false && (
          <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            JavaScript
          </a>
        )}
        <button
          onClick={() => setRender(false)}
          className=" px-3 py-1 text-sm  text-gray-100  transition-colors duration-200 transform  rounded text-bold bg-transparent dark:bg-transparent cursor-pointer hover:text-gray-400  font-semibold    hover:border-transparent inline-flex items-center"
        >
          <MdClose className="h-5 w-5 " />
        </button>
      </div>
      <div className="mt-2">
        <a
          href="#"
          className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >
          How to sanitiz array() in JS
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Dui urna vehicula tincidunt pretium consequat luctus mi, platea
          fermentum conubia tempus ac orci. Pellentesque dictum malesuada
          cubilia faucibus dignissim mi nascetur senectus, augue ad libero
          efficitur dolor duis lobortis, non etiam sociosqu.
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read more ⟶
        </a>
        <div className="flex items-center">
          <img
            src="https://stackdiary.com/140x100.png"
            alt="Author Photo"
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
          />
          <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
            John Doe
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard3;
