
import { Link } from 'react-router-dom';


const DonationsCard = ({donation}) => {
   const {id,category,title,picture,description,price,categoryColors,cardBgColor,textButtonBgColor} = donation;
   const {health,education,clothing,food} = categoryColors;
   const {healthCard,educationCard,clothingCard,foodCard} = cardBgColor;
   const {healthText,educationText,clothingText,foodText} = textButtonBgColor;
   
   const btnbgcolor = {
          backgroundColor : 
          category === "Health"
          ? healthText
          : category === "Education"
          ? educationText 
          : category === "Clothing"
          ? clothingText
          : category === "Food"
          ? foodText
          :"",
   };

   const cardStyle = {
    backgroundColor:
      category === "Health"
        ? healthCard
        : category === "Education"
        ? educationCard
        : category === "Clothing"
        ? clothingCard
        : category === "Food"
        ? foodCard
        : "",
  };

  const categoryStyle = {
    color:
      category === "Health"
        ? health
        : category === "Education"
        ? education
        : category === "Clothing"
        ? clothing
        : category === "Food"

  };


    return (


        <div>
                <Link to={`/donation/${id}`}>
                <div style={cardStyle} className="card h-96  bg-base-100 shadow-xl">
                <figure><img className='h-52 w-full ' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <button style={btnbgcolor}  className='text-center w-[90px] rounded-md '><p style={categoryStyle}>{category}</p></button>
                    <h2 style={categoryStyle} className='font-bold'>{title}</h2>
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





























