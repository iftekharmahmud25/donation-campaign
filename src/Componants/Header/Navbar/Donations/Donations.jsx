import DonationsCard from "../DonationsCard/DonationsCard";


const Donations = ({donations}) => {
    
    return (
        <div className="py-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  mt-10">
                      {
                         donations?.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
                      }
                  </div>
        </div>
    );
};

export default Donations;