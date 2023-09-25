
import { Link } from 'react-router-dom';


const DonationsCard = ({donation}) => {
   const {id,category,title,picture,categoryBackground,description,price} = donation;

    return (
        <div>
                <Link to={`/donation/${id}`}>
                <div className="card h-96  bg-base-100 shadow-xl">
                <figure><img className='h-52 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <button className='text-start'>{category}</button>
                    <h2 className='font-bold'>{title}</h2>
                    <p></p>
                    <p>{description}</p>
                    <p>Price :${price}</p>
                   
                </div>
            </div>
                
                </Link>
        </div>
    );
};

export default DonationsCard;