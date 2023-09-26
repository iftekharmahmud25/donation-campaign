import React, { useEffect, useState } from 'react';
import Card from '../../Componants/Header/Navbar/Donations/Card/Card';

const Donation = () => {
  const [donations,setDonations] = useState([]);
  const [noFound,setNoFound] = useState(false);
  const [isShow,setIsShow]  = useState(false)


  useEffect(()=>{
    const donationItem = JSON.parse(localStorage.getItem('donation'));
    if(donationItem){
        setDonations(donationItem)
    }
    else{
         setNoFound("No Data Found");
    }


  },[])

  

    return (
        <div>
            
           {noFound ?  <p className =" h-[50vh] flex justify-center items-center">{noFound}</p>  : <div>
            
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-[70%] mx-auto'>
                 {
                     isShow ? donations.map((donation) => (
                        <Card key={donation.id} donation={donation}></Card>
                      )) 
                      
                      : donations.slice(0,4).map((donation) => (
                        <Card key={donation.id} donation={donation}></Card>
                      ))
                 }
              </div>

            {donations.length > 4 &&   <button onClick={()=> setIsShow(!isShow)}  className=' mt-6 px-3 py-2 rounded-md bg-red-500 block mx-auto text-white '>{isShow ? 'See Less' : 'See More'}</button>}
            
             </div>  }
        </div>
    );
};

export default Donation;