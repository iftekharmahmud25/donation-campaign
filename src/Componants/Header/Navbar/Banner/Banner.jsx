

const Banner = () => {
    return (
        <div className='h-[50vh] '>
             <h1 className='text-center py-12 text-md md:text-2xl lg:text-3xl font-bold'>I Grow By Helping People In Need</h1>

             <div className='text-center'>
             <input type="text" placeholder="Search here...." className="input input-bordered w-[50%] md:w-full lg:w-full max-w-xs" />
             <button className='bg-[#FF444A] w-[110px] h-[50px] rounded-md text-white'>Search</button>
             </div>

        </div>
    );
};

export default Banner;