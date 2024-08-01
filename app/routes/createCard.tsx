import { useState } from "react";

export default function CreateCard() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [cards, setCards] = useState([]);
  const [tel, setTel] = useState("");
  const [images, setImages] = useState("");
  const [nextId, setNextId] = useState(1); 
  const [cardCount, setCardCount] = useState(0); 

  const handleClickAdd = (na, no, tel, imag) => {
    setCards([
      ...cards,
      {
        id: nextId,
        name: na,
        note: no,
        tel: tel,
        images: imag,
      },
    ]);
    setNextId(nextId + 1);
    setCardCount(cardCount + 1); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">เพิ่มข้อมูล</h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">ชื่อ-สกุล</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            name="cName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ที่อยู่</label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg"
            name="cNote"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">เบอร์โทร</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            name="cTel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">เพิ่มรูป (URL)</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            name="cImages"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
        </div>
        <button
          onClick={() => handleClickAdd(name, note, tel, images)}
          className="w-full bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          เพิ่มข้อมูล
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          ข้อมูลที่ถูกเพิ่มเข้ามา ({cardCount})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card bg-white p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold">{card.name}</h2>
              <p>{card.note}</p>
              <p>{card.tel}</p>
              {card.images && (
                <img
                  src={card.images}
                  alt={`${card.name}'s image`}
                  className="mt-2 rounded-lg"
                />
              )}
              <br />
              <button
                className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => alert(`${card.id}`)}
              >
                ข้อมูลเพิ่มเติม
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
