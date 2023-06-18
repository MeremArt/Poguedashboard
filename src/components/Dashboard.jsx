import React, { useState, useEffect } from "react";
import StatusCard from "./StatusCard";
import statusCard from "./Data";
import ApexCharts from "react-apexcharts";
import Table from "./Table";
import LatestTransaction from "./LatestTransaction";
import { collection, getDocs } from 'firebase/firestore';
import { FaUser, FaJediOrder, FaUserCog, FaUsers, FaLock } from "react-icons/fa";
import { IoMdAppstore } from "react-icons/io";
import { GiPerson, GiReceiveMoney } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { RxBlendingMode } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const chartOptions = {
  series: [
    {
      name: "Online-customer",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
    {
      name: "Store Customer",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51],
    },
  ],
  options: {
    color: ["#b929c5", "#b929c6"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};




const Dashboard = ({communities,users}) => {
  const [visitors, setVisitors] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState([]);

  useEffect(()=>{
  
    async function getInfo(){
      try{
        const col = collection(db, 'admin','stats','visitors');
        const snapshot = await getDocs(col);
        if(snapshot.exists){
        setVisitors(snapshot.docs.map(doc => doc.data()));
        }
      
        const col2 = collection(db, 'admin','stats','income');
        const snapshot2 = await getDocs(col2);
        if(snapshot2.exists){
        setIncome(snapshot.docs.map(doc => doc.data()));
        }
      
        const col3 = collection(db, 'admin','stats','transactions');
        const snapshot3 = await getDocs(col3);
        if(snapshot3.exists){
        setTransactions(snapshot.docs.map(doc => doc.data()));
        }
            
      }catch(e){
        toast.error('Something went wrong, check network settings and try again.');
      }
    }
  
      getInfo();
  },[])

  return (
    <>
    <br/>
    <br/>
      
      <div className="grid grid-cols-2  gap-3">
   
            <StatusCard
              key={1}
              icons={<IoMdAppstore size={24} />}
              title={"Daily visitors"}
              count={(visitors[(new Date().getFullYear())+'-'+
                String((new Date().getMonth()+1).toString().padStart(2,'0'))+'-'+
                String((new Date().getDate()).toString().padStart(2,'0'))]??0).toString()}
            />
            <StatusCard
              key={2}
              icons={<GiReceiveMoney size={24} />}
              title={"Daily Income"}
              count={'$'+(income[(new Date().getFullYear())+'-'+
                String((new Date().getMonth()+1).toString().padStart(2,'0'))+'-'+
                String((new Date().getDate()).toString().padStart(2,'0'))]??0).toString()}
            />
            <StatusCard
              key={3}
              icons={<GiPerson size={24} />}
              title={"Total users"}
              count={users??'not set'}
            />
            <StatusCard
              key={4}
              icons={<BsGraphUp size={24} />}
              title={"Total communities"}
              count={communities ?? 'not set'}
            />
        </div>
      
    <br/>
    <br/>
    <br/>
    <br/>

      <div className=" z-0 text-black">
          <div className="w-full z-0 mt-[-30px] bg-white rounded shadow shadow-md">
            <ApexCharts
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height="180%"
              className="z-0"
            />
          </div>
        </div>


    <br/>
    <br/>
        <br/>
    <br/>
        <div className="bg-white rounded p-3 shadow shadow-md text-[gray]">
          <div>Latest Transactions</div>
          <div>
            <LatestTransaction transactions={transactions}/>
          </div>
          <div className="text-center">View All</div>
        </div>
      <div className="flex items-center gap-x-3">
       
      </div>
    </>
  );
};

export default Dashboard;
