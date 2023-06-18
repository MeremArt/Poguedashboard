import React from "react";
import { latestOrder } from "./Data";
const LatestTransaction = ({transactions}) => {
  const Style = (statusd) => {
    if (statusd === "Successfull") {
      return "text-green-500";
    } else if (statusd === "Pending") {
      return "text-yellow-500";
    } else if (statusd === "Refund") {
      return "text-red-500";
    }else {
        return "text-green-500"
    }
  };
  return (
    <div className="px-1">
      <table className=" w-[600px] rounded-md h-[400px] py-4 px-1">
        <thead>
          <tr className="">
            {latestOrder.map((item, index) => (
              <th key={index} className="text-left py-2 text-[gray] px-1">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="rounded">
          {transactions.length>0?transactions.map((item) => (
            <tr
              key={item.id}
              className="rounded hover:bg-purple-500 hover:text-white"
            >
              <td className="text-left px-3 py-3">{item.orderId}</td>
              <td className="text-left px-3 py-3">{item.user}</td>
              <td className="text-left px-3 py-3">{item.order}</td>
              <td className="text-left px-3 py-3">{item.dates}</td>
              <td className={`text-left px-2 py-2 ${Style(item.status)}`}>
                {item.status}
              </td>
            </tr>
          )): 
          <div><br/><br/>No transactions yet</div>
          }
        </tbody>
      </table>
    </div>
  );
};

export default LatestTransaction;
