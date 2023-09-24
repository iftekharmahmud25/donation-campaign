import React from 'react';


const DonationsCard = ({donation}) => {
   const {category,title,picture,categoryBackground,description} = donation;

    return (
        <div>
            <div className="card h-96  bg-base-100 shadow-xl">
                <figure><img className='h-52 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <button className='text-start'>{category}</button>
                    <h2 className='font-bold'>{title}</h2>
                    <p>{description}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default DonationsCard;