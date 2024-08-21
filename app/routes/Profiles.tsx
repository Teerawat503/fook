// src/Profiles.tsx
import React from 'react';
import IsMember from './IsMember';

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
  bio: string;
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
          title={nam}
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <IsMember id={id} act={act} />
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {nam}
            </div>
            <p className="text-gray-700 text-lg">{bio}</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={imgu} title={nam} />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{usrn}</p>
              <p className="text-gray-600">{cdat}</p>
            </div>
          </div>
          <a
            href={`view?id=${id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ดูข้อมูล
          </a>
        </div>
      </div>
    </center>
  );
}

export default Profiles;
