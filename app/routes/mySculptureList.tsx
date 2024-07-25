import { useState } from "react";
import { sculpturelists } from "./SculptureLists";

export default function EProject() {
  const [index, setIndex] = useState(0);
  const [sctList, setSctList] = useState(sculpturelists);

  function handleClickNext() {
    if (index + 1 >= sculpturelists.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handleClickBack() {
    if (index === 0) {
      setIndex(sculpturelists.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  let sculpture = sculpturelists[index];

  return (
    <>
      <div className="flex justify-center space-x-4 my-4">
        <button
          onClick={handleClickNext}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
        <button
          onClick={handleClickBack}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
      <div className="text-4xl text-center my-4">
        <h2>
          <i>{sculpture.name} </i>พัฒนาโดย {sculpture.author}
        </h2>
      </div>
      <div className="text-2xl text-center my-2">
        <h3>
          หน้าที่ {index + 1} จาก {sculpturelists.length} หน้า
        </h3>
      </div>
      <div className="flex justify-center my-4">
        <div className="max-w-4xl">
          <img
            src={sculpture.url}
            title={sculpture.name}
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
      <div className="text-center my-4 px-4">
        <p className="text-lg">{sculpture.description}</p>
        <a
          href={sculpture.reference}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          เอกสารอ้างอิง
        </a>
      </div>
    </>
  );
}
