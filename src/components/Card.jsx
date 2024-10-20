import React from "react";

const Card = (props) => {
  const cardData = props.cData;

  return (
    <>
      {cardData.map((cdata, index) => {
        return (
          <div
            key={index}
            className="w-60  bg-slate-400 flex flex-col items-center justify-center h-80 py-5 px-5 text-2xl"
          >
            <img
              className="w-50 h-50 rounded-full"
              src={cdata.download_url}
              alt=""
            />
            <h1>{cdata.author}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Card;
