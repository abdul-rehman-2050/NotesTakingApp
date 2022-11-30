import React from "react";
import { FaPlus, FaSave, FaTrash } from "react-icons/fa";

type Props = {};

type NotesType = {
  id?: number;
  title: string;
  noteText: string;
  createdAt?: Date;
};

const CreateNoteCard = (props: Props) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [titlePlaceHolderText, setTitlePlaceHolderText] = React.useState(
    "Create a New Note..."
  );
  const [titleText, setTitleText] = React.useState("");
  const [notesText, setNotesText] = React.useState("");

  function enableEditing() {
    setIsEditing(true);
    setNotesText("");
    setTitleText("");
    setTitlePlaceHolderText("title ...");
  }

  function disableEditing() {
    setIsEditing(false);
    setTitleText("");
    setTitlePlaceHolderText("Create a New Note ...");
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitleText(e.target.value);
  }
  function prepareAndSubmit() {
    let dateTime = new Date();
    const val: NotesType = {
      id: 1,
      title: titleText,
      noteText: notesText,
      createdAt: dateTime,
    };
    alert(JSON.stringify(val));
    disableEditing();
  }

  return (
    <div className="bg-gray-200 dark:bg-gray-800 dark:text-white">
      <div className=" flex flex-col  items-center justify-center dark:bg-gray-800 p-10">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >
          Create Notes
        </button>

        <div className=" w-full m-2">
          <input
            type="text"
            className="p-3 w-full text-bold text-gray-700 dark:bg-gray-700 dark:text-white"
            placeholder={titlePlaceHolderText}
            onFocus={() => enableEditing()}
            value={titleText}
            onChange={handleTitleChange}
          ></input>
        </div>
        {isEditing && (
          <>
            <div className="w-full m-2">
              <textarea
                rows={5}
                value={notesText}
                onFocus={() => setIsEditing(true)}
                className="p-3 w-full text-bold text-gray-800 dark:bg-gray-700 dark:text-white"
                onChange={(e) => setNotesText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end  w-full gap-1">
              <div>
                <button
                  onClick={() => disableEditing()}
                  className="bg-red-600  rounded text-bold bg-transparent dark:bg-gray-700 hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border  hover:border-transparent inline-flex items-center"
                >
                  <FaTrash className="h-5 w-5 justify-start"></FaTrash>
                </button>
              </div>
              <div>
                <button
                  onClick={() => prepareAndSubmit()}
                  className="  rounded  text-bold bg-teal-800 dark:bg-gray-700 hover:bg-green-500 text-white font-semibold hover:text-white py-2 px-4 border  hover:border-transparent inline-flex items-center"
                >
                  <FaSave className="h-5 w-5 justify-start" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateNoteCard;
