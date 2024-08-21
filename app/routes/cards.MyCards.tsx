import { cards } from "./data";
import { useState } from "react";

function IsMember({ id, act }: { id: number; act: boolean }) {
  if (act) return <span key={id}>✅ Hi, VIP Member</span>;
  else return <span key={id}>❌ Member Only!</span>;
}

function Profiles({
  id,
  nam,
  bio,
  bgp,
  imgu,
  usrn,
  cdat,
  act,
}: {
  id: number;
  nam: string;
  bio: any;
  bgp: string;
  imgu: string;
  usrn: string;
  cdat: string;
  act: boolean;
}) {
  return (
    <center>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div
          className="m-6 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${bgp})`, color: "blue" }}
          title="fook"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {/* <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>  */}
              <IsMember id={id} act={act} />
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-700 text-lg">{bio}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={imgu}
              title={nam}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{usrn}</p>
              <p className="text-gray-600">{cdat}</p>
            </div>
          </div>
          <a
            href={`/view/${id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ดูข้อมูล
          </a>
        </div>
      </div>
    </center>
  );
}

export default function MyCards() {
  const [active, setActive] = useState(true);

  const name = "Teerawat Barnvimol";
  const note = "#Web Programming #Softwareengineering";
  const note2 = "Pecco #GOFREE";
  const chk = true;

  const items = cards.filter((cardItems) => cardItems.active === active);

  const cardItems = items.map(
    (cardItem) => (
      <Profiles
        id={cardItem.id}
        nam={cardItem.name}
        bio={cardItem.bio}
        bgp={cardItem.bgProd}
        imgu={cardItem.userIcon}
        usrn={cardItem.userName}
        cdat={cardItem.createdAt}
        act={cardItem.active}
      />
    )
    // <>
    //    {cardItem.userName}<br />
    //    {cardItem.bio}<br />
    //    <img src={cardItem.bgProd} alt="" width="20" height="20" />
    // </>
  );

  function handleClickAtive() {
    //alert("Before handleClickActive -->"+active)
    setActive(true);
    alert("After handleClickActive -->" + active);
  }
  function handleClickNoAtive() {
    //alert("Before handleClickActive -->"+active)
    setActive(false);
    alert("After handleClickActive -->" + active);
  }

  return (
    <center>
      <div className="m-10 bg-sky-300 p-10 rounded-3xl">
        <>
          <h1 className="font-bold text-3xl">My Cards: {name}</h1>
          <div className="flex flex-row">
            <div className="basis-1/4 m-2 p-3 font-bold bg-red-200 rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-Rule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clip-Rule="evenodd"
                />
              </svg>
              {note}
            </div>
            <div className="basis-1/2 m-2 p-3 bg-green-200 rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                <path
                  fill-Rule="evenodd"
                  d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-Rule="evenodd"
                />
              </svg>
              {note2}
            </div>
          </div>
          {}
          <hr />
          <div className="flex flex-row">
            <button
              className="w1/2 bg-green-700 text-green-100 rounded-3xl"
              onClick={handleClickAtive}
            >
              Active
            </button>
            <button
              className="w1/2 bg-green-700 text-green-100 rounded-3xl"
              onClick={handleClickNoAtive}
            >
              No Active
            </button>
          </div>
          {/* <center><Profiles /></center> */}
          {cardItems}
        </>
      </div>
    </center>
  );
}
