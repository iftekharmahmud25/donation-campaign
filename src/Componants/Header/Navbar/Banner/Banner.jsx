import { useState } from "react";



const Banner = ({search,handleForm,handleInput}) => {

    

  

  

     


    return (
        <div className='h-[50vh] '>
             <h1 className='text-center py-12 text-md md:text-2xl lg:text-3xl font-bold'>I Grow By Helping People In Need</h1>

             <form onSubmit={handleForm} className='text-center'>
             <input onChange={handleInput}  value={search} type="text" placeholder="Search here...." className="input input-bordered w-[50%] md:w-full lg:w-full max-w-xs" />
             <button  className='bg-[#FF444A] w-[110px] h-[50px] rounded-md text-white'>Search</button>
             </form>

        </div>
    );
};

export default Banner;

















































































