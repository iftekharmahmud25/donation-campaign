import swal from "sweetalert";


const SingleCard = ({donation}) => {
    const {id,category,title,picture,categoryBackground,description,price} = donation;


   const handleAdd = () =>{
    
    const addDonationArray = [];
    const donationItem = JSON.parse(localStorage.getItem('donation'));
    if(!donationItem){
         addDonationArray.push(donation)
         localStorage.setItem('donation',JSON.stringify(addDonationArray))
         swal("Good job!", "You Have Successfully Donated!", "success");
    }
    else{
         const isExists = donationItem.find((donation) => donation.id === id);

         if(!isExists){
             addDonationArray.push(...donationItem,donation)
             localStorage.setItem('donation',JSON.stringify(addDonationArray))
             swal("Good job!", "You Have Successfully Donated!", "success");
         }
        
         else{
            swal("Error!", "Already Added!", "Error");
         }
    }



   }



    return (
        <div className="w-[90%] mx-auto">
               <div className="card h-96  bg-base-100 shadow-xl">
                <figure><img className='h-52 w-full contain' src={picture} alt="Shoes" /></figure>
                <div className="card-body">

                    <button onClick={handleAdd} className='text-start btn btn-error w-[100px] -mt-20 text-white'>Donate${price}</button>
                    <h2 className='font-bold'>{title}</h2>
                    <p></p>
                    <p>{description}</p>
                    
                   
                </div>
            </div>




        </div>
    );
};

export default SingleCard;




























