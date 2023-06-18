import React from "react";
import { userlistsheader } from "./components/Data";
import { customer } from "./components/Data";
const ManageUser = () => {
  return (
    <div className="text-black text-[13px] ">
      <div className="mb-6 text-md text-xl font-bold">USERS</div>
      <div className="bg-white shadow shadow-md rounded">
        <table className="table-auto w-full rounded-md py-1 px-1">
          <thead>
            <tr className="">
              {userlistsheader.map((item, index) => (
                <th key={index} className="text-left py-2 text-[gray] px-4">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="rounded ">
            {customer.map((item) => (
              <tr
                key={item.id}
                className="rounded text-left hover:bg-purple-500 hover:text-white"
              >
                <td className=" text-left px-2 py-1">{item.name}</td>
                <td className="text-left px-2 py-1">{item.email}</td>
                <td className="text-left px-1 py-1">{item.phone}</td>
                <td className="text-left px-1 py-1">{item.total_orders}</td>
                <td className="text-left px-1 py-1">{item.total_spend}</td>
                <td className="px-1 py-1 ">{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
