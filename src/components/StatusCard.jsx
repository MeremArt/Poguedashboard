import React from "react";

const StatusCard = ({ icons, title, count }) => {
  return (
    <div className="text-black">
      <div className="rounded  status-card px-4 py-8 glassmorphism flex items-center justify-between">
        <div className="z-10 text-white">{icons}</div>
        <div className="flex flex-col">
          <h1 className="z-10 font-bold text-[gray] text-md">{count}</h1>
          <p className="z-10 text-[gray]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
