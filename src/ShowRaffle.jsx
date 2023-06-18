import { userlistsheader } from "./components/Data";
import { customer } from "./components/Data";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { notification } from "./components/Data";
import UserImg from "./assets/ebub.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, getDocs } from 'firebase/firestore';

const ShowRaffle = ({type,state,name,myData,db}) => {
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
  const [raffles, setRaffles] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const currentTime = Date.now();
  
  function formatDuration(dateString) {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
  
    const timeDiff = Math.abs(targetDate - currentDate) / 1000; // Time difference in seconds
  
    const days = Math.floor(timeDiff / 86400);
    const hours = Math.floor((timeDiff % 86400) / 3600);
    const minutes = Math.floor(((timeDiff % 86400) % 3600) / 60);
  
    return `${days != 0? days+' days ' : ''}${hours!= 0? hours+' hrs ' : ''}${minutes!= 0? minutes+' mins ' : ''}`;
  }

  // useEffect(()=>{

    async function getRaffles(){
      try{
      // const rafflesCol = collection(db, state,type,'raffles');
      const rafflesCol = collection(db,type=='WL'? 'raffles':'NFTRaffles');
      const rafflesSnapshot = await getDocs(rafflesCol);
      const rafflesList = rafflesSnapshot.docs.map(doc => doc.data());
      setRaffles(rafflesList);
      setLoading(false);
      }catch(e){
        toast.error('Something went wrong, check network settings and try again.');
        setLoading(false);
      }
    }

    getRaffles();

// },[])

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

  function formatDuration(dateString) {
    const currentDate = new Date();
    const targetDate = new Date(dateString);
  
    const timeDiff = Math.abs(targetDate - currentDate) / 1000; // Time difference in seconds
  
    const days = Math.floor(timeDiff / 86400);
    const hours = Math.floor((timeDiff % 86400) / 3600);
    const minutes = Math.floor(((timeDiff % 86400) % 3600) / 60);
  
    return `${days != 0? days+' days ' : ''}${hours!= 0? hours+' hrs ' : ''}${minutes!= 0? minutes+' mins ' : ''}`;
  }

  return (
    <div>
  {/* TOP NAV */}
  <div className="px-3">
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
                <img
                  src={UserImg}
                  className="w-6 h-6 rounded-full"
                  alt="image"
                />
                &nbsp;
                <h2>Blaqbrane</h2>
              </div>
              
            </div>
            <div className="relative">
              <IoIosNotifications size={23} />
              {/* <h3
                onClick={() => {
                  setIsOpen(!isOpen);
                  setUser(false);
                }}
                className="absolute top-[-8px] left-3 text-center text-white text-[11px] rounded-full bg-purple-500 w-[20px] h-[20px]"
              >
                {notification.length}
              </h3> */}
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
        </div>

    <div className="text-black text-[13px] " >
      <div className="mb-6 text-md text-xl font-bold">{name}</div>
      <div className="bg-white  rounded">

{
  loading?
  <div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div className="container"><div className="row"><div className="montserrat col-12 message"><center>Fetching Raffles...</center></div></div></div>
    </div>:

    //WL Raffle
    type=='WL'?
    ( <div className=''>   
      
    <div className="height"></div>
    <center>
    <div>
        <div className="container-fluid margin-sides">
      <div className="row">
      {raffles.map((item) => (
              <div  onClick={()=>changePage(item,'wl')} className="bcarousel-item3 curved pointer shadow"style={{backgroundColor:'white'}}>
              <div>
                  <div className="follow2 d-none d-md-block">
                  <div className="icn">
                    <center>
                      <span style={item['entries'].includes(myData.id)?{color:'yellow'}:{}}
                       className=" pointer">
            <FontAwesomeIcon icon={faMoneyBill1} />
            </span>
                    </center>
                  </div>
                  </div>
            
                <div className='curved-inner img2 banner4' style={{backgroundImage:`url("${item['raffleCover']}")`,filter: 
                item.state == 'ended' || (new Date(item['endDate'])).getTime() < currentTime?"grayscale(100%)":"grayscale(0%)"}}>
                  <div className="dp2" style={{backgroundImage:`url("${item['raffleLogo']}")`}}></div>
              </div>
              </div>
                <div className='ft-container'>
                 <h4 className='raffle-name'>{item['name']}</h4>
                  <div className='inner-case'>
                  <div className='navbar cage'>
                    <div className='grey'>Winners</div>
                    <div className="black">{item['winners']}</div>
                  </div>
                  {item.state == 'ended' || (new Date(item['endDate'])).getTime() < currentTime?
                  <div className='navbar cage pad-top'>
                    <div className='grey'> Ended</div>
                    <div className="black">{ new Date(item['endDate']).toLocaleDateString('en-US', options)}</div>
                  </div>:
                  <div className='navbar cage pad-top'>
                  <div className='grey'> Ends in</div>
                  <div className="black">{ formatDuration(item['endDate'])}</div>
                </div>}
                  <hr className="hr-half "/>
            
            <div className="links2">
            <div className="row">
                  {item['discordInviteURL'] == null ?'':<a href={`${item['discordInviteURL']}`}><div className="icon-discord2 col"></div></a>}
                  {item['twitter'] == null ?'':<a href={`${item['twitter']}`}><div className="icon-twitter2 col"></div></a>}
              </div>
              </div>
              </div>
             
              <br/>
              <br/><br/>
              <br/>
            
            </div>
              </div>
              
             ))}
    
                          
                        </div>
    
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                 
          </center>
        </div>):


     //NFT Raffle
     (<div  className=''>   
  <div className="height"></div>
  <center>
  <div>
      <div className="container-fluid margin-sides">
    <div className="row">
    {raffles.map((item) => (
            <div onClick={()=>changePage(item,'nft')} className="bcarousel-item4 curved pointer shadow"style={{backgroundColor:'white'}}>
            <div>
          
              <div className='curved-inner img2 banner4' style={{backgroundImage:`url("${item['raffleBanner']}")`,filter: 
              item.state == 'ended' || (new Date(item['endDate'])).getTime() < currentTime?"grayscale(100%)":"grayscale(0%)"}}>
            </div>
            </div>
              <div className='ft-container'>
              <h4 className='raffle-name'>{item['name']}</h4>
                <div className='inner-case'>
                <div className='navbar cage'>
                  <div className='grey'>cost</div>
                  <div className='row black' >{item['cost']}&nbsp;<div className='polygon-white inline-block'></div></div>
                </div>
                <div className='navbar cage pad-top'>
                  <div className='grey'>floor</div>
                  <div className='row black'>{item['floor']}&nbsp;<div className='polygon-white inline-block'></div></div>
                </div>

                {item.state == 'ended' || (new Date(item['endDate'])).getTime() < currentTime?
              <div className='navbar cage pad-top'>
                <div className='grey'> Ended</div>
                <div className=' black'>{ new Date(item['endDate']).toLocaleDateString('en-US', options)}</div>
              </div>:
              <div className='navbar cage pad-top'>
              <div className='grey'>Ends in</div>
              <div>{ formatDuration(item['endDate'])}</div>
            </div>}
            <button className='btn btn-block ' style={{borderRadius:'6px',border:'none',backgroundColor:'#5865f0',marginTop:'10px',fontFamily:'montserrat',fontSize:'12px',color:'white'}}>Fee {item.ticketPrice} Matic</button>
            </div>
          
            <br/>
            <br/><br/>
            <br/>
          
          </div>
            </div>
          ))}

  </div> 
  </div> 
  </div>
  </center>
  <ToastContainer />
      </div>)
}
      

        
      </div>
    </div>
    </div>
  );

};

export default ShowRaffle;
