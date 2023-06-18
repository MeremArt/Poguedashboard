import React from "react";
import { topUserHeader } from "./Data";
import { topUserData } from "./Data";
const Table = () => {
  return (
    <div className="px-3">
      <table className=" w-full rounded-md py-4 px-4">
        <thead>
          <tr className="">
            {topUserHeader.map((item, index) => (
              <th key={index} className="text-left py-2 text-[gray] px-4">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="rounded">
          {topUserData.map((item) => (
            <tr
              key={item.id}
              className="rounded hover:bg-purple-500 hover:text-white"
            >
              <td className="text-left px-4 py-2">{item.name}</td>
              <td className="text-left px-4 py-2">{item.order}</td>
              <td className="text-left px-4 py-2">{item.spendn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
