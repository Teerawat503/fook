import { useParams } from "@remix-run/react";

export default function GetCard() {
  const myParams = useParams();
  
  return (
    <>
       Your Get cardId: {myParams.cardid} <br />
       Your get title: {myParams.title} <br />
    </>
  );
}