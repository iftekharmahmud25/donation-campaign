

const Card = ({donation}) => {

    const {id,category,title,picture,categoryBackground,description,price} = donation;
    return (
        <div>

            <div className="card w-80  bg-base-100 shadow-xl">
                <figure><img className='h-52 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <button className='text-start'>{category}</button>
                    <h2 className='font-bold'>{title}</h2>
                    <p></p>
                    <p>{description}</p>
                    <p>Price :${price}</p>
                    <button className="text-start  bg-blue-500 w-[100px] text-white rounded-sm ">View Details</button>

                </div>
            </div>

        </div>
    );
};

export default Card;