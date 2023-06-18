import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { notification } from "./Data";
import { useState, useEffect } from "react";
import UserImg from "../assets/ebub.jpg";
import { customer } from "./Data";
const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [viewUser, setViewUser] = useState(false);
  const [searched, setSearched] = useState("");
  const [content, setContent] = useState({
    name: "",
    email: "",
    phone: "",
    totalOrder: "",
    totalSpent: "",
    location: "",
  });

  const handleChange = (e) => {
    setSearched(e.target.value);
  };
  const handleSearch = (searchTerm) => {
    setSearched(searchTerm.name);
    console.log();
    const new_constant = (prevcontent) => ({
      ...prevcontent,
      name: searchTerm.name,
      email: searchTerm.email,
      phone: searchTerm.phone,
      totalOrder: searchTerm.total_orders,
      totalSpent: searchTerm.total_spend,
      location: searchTerm.location,
    });
    setContent(new_constant);
  };
  return (
    <div className="text-black bg-gray p-5 ">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col items-center">
          <div className="flex items-center border border-purple-500 px-3 py-1 rounded-md glassmorphism ">
            <input
              type="text"
              placeholder="search here ..."
              value={searched}
              onChange={handleChange}
              className="outline-none bg-inherit"
            />
            <button disabled={!searched} onClick={() => setViewUser(!viewUser)}>
              <AiOutlineSearch />
            </button>
          </div>
          {viewUser && (
            <div className="fixed top-2 glassmorphism right-[500px] py-2 px-4 bg-white z-10 text-black">
              <ul>
                <li>Name:{content.name}</li>
                <li>Email:{content.email}</li>
                <li>Phone:{content.phone}</li>
                <li>Total Orders:{content.totalOrder}</li>
                <li>Totral Spent:{content.totalSpent}</li>
                <li>Location:{content.location}</li>
              </ul>
            </div>
          )}

          <div className="fixed bg-white polymorphism text-black z-10 top-10">
            {customer
              .filter((item) => {
                const SearchTerm = searched.toLowerCase();
                const Titles = item.name.toLowerCase();
                return (
                  SearchTerm &&
                  Titles.startsWith(SearchTerm) &&
                  Titles !== SearchTerm
                );
              })
              .slice(0, 5)
              .map((item) => {
                return (
                  <div
                    className="cursor-pointer text-black m-2"
                    onClick={() => handleSearch(item)}
                    key={item.id}
                  >
                    {item.name}
                  </div>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col z-10">
          <div className="text-black flex items-center gap-x-4">
            <div className="flex flex-col">
              <div
                onClick={() => {
                  setIsOpen(false);
                  setUser(!user);
                }}
                className="flex items-center"
              >
                {/* <AiOutlineUser size={23} /> */}
                <img
                  src={UserImg}
                  className="w-6 h-6 rounded-full"
                  alt="image"
                />
                <h2>Blaqbrane</h2>
              </div>
              {user && (
                <div className="fixed bg-white z-10 top-12 rounded-md shadow shadow-md px-5 py-2 ">
                  <ul className="space-y-3">
                    <li>Profile</li>
                    <li>My Wallet</li>
                    <li>Settings</li>
                    <li>Logout</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative">
              <IoIosNotifications size={23} />
              <h3
                onClick={() => {
                  setIsOpen(!isOpen);
                  setUser(false);
                }}
                className="absolute top-[-8px] left-3 text-center text-white text-[11px] rounded-full bg-purple-500 w-[20px] h-[20px]"
              >
                {notification.length}
              </h3>
            </div>
          </div>
          {isOpen && (
            <div
              className={
                isOpen
                  ? "fixed right-0 top-14 bg-white w-48 space-y-10 h-28 px-2 py-1 shadow shadow-lg text-[gray] rounded  overflow-y-auto"
                  : "hidden"
              }
            >
              <ul>
                {notification.map((item) => (
                  <ul key={item.id} className="z-10 text-sm mt-4">
                    {item.case}
                  </ul>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
