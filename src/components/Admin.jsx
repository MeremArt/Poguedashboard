import React from "react";
import { useState } from "react";
import { data } from "./Data";
import TopNav from "./TopNav";
import Logo from "../assets/ebub.jpg";
import Dashboard from "./Dashboard";
import ManageUser from "../ManageUser";
import ShowRaffle from "../ShowRaffle";
import ManageAdmin from "./ManageAdmin";
import Managecommunities from "./Managecommunities";
import Withdraw from "./Withdraw";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

var firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var db = getFirestore(app);

const options = { day: "numeric", month: "long", year: "numeric" };

const Admin = () => {
  const [myData, setData] = useState({});
  const [newComponent, setNewComponent] = useState("Dashboard");
  const [active, setActive] = useState("Dashboard");
  const handleNewComponent = (newcomponent) => {
    setNewComponent(newcomponent);
  };
  const renderNewComponent = () => {
    switch (newComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "Manage Users":
        return <ManageUser />;
      case "Active WL Raffle":
        return (
          <ShowRaffle
            type={"WL"}
            state={"active"}
            name={"Active WL Raffle"}
            myData={myData}
            db={db}
          />
        );
      case "Pending WL Raffle":
        return (
          <ShowRaffle
            type={"WL"}
            state={"pending"}
            name={"Pending WL Raffle"}
            myData={myData}
            db={db}
          />
        );
      case "Ended WL Raffle":
        return (
          <ShowRaffle
            type={"WL"}
            state={"ended"}
            name={"Ended WL Raffle"}
            myData={myData}
            db={db}
          />
        );
      case "Active NFT Raffle":
        return (
          <ShowRaffle
            type={"NFT"}
            state={"active"}
            name={"Active NFT Raffle"}
            myData={myData}
            db={db}
          />
        );
      case "Pending NFT Raffle":
        return (
          <ShowRaffle
            type={"NFT"}
            state={"pending"}
            name={"Pending NFT Raffle"}
            myData={myData}
            db={db}
          />
        );
      case "Ended NFT Raffle":
        return (
          <ShowRaffle
            type={"NFT"}
            state={"ended"}
            name={"Ended NFT Raffle"}
            myData={myData}
            db={db}
          />
        );
      case "Manage Admins":
        return <ManageAdmin />;

      case "Manage Communities":
        return <Managecommunities />;

      case "Withdrawal Confirmation":
        return <Withdraw />;

      default:
        return <div className="text-black">Coming Soon...</div>;
    }
  };
  return (
    <div
      className="text-white flex "
      style={{ backgroundColor: "white", height: "100%" }}
    >
      <div
        className="w-1/4 fixed h-[100vh]  overflow-y-auto text-black"
        style={{ backgroundColor: "white" }}
      >
        <div className="bg-sidebar text-white p-4 mb-3 flex items-start justify-start gap-x-3">
          <img src={Logo} alt="logo" className="w-8 h-8 rounded-full" />
          <h1>POGUE</h1>
        </div>
        <ul className="px-1">
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                handleNewComponent(item.case);
                setActive(item.case);
              }}
              className={`${
                active === item.case ? "bg-sidebar text-white" : ""
              } mb-3 flex items-center gap-x-3 rounded p-3 hover:bg-purple-700 hover:text-white`}
            >
              <div
                className={`${
                  active === item.case
                    ? "text-white hover:text-white"
                    : "text-purple-600"
                } hover:text-white`}
              >
                {item.icon}
              </div>
              <button>{item.case}</button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="w-3/4 ml-[320px]"
        style={{ backgroundColor: "white", minHeight: "800px" }}
      >
        <div className="px-8">{renderNewComponent()}</div>
      </div>
    </div>
  );
};

export default Admin;
