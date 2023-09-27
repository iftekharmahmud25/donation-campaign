import DonationsCard from "../DonationsCard/DonationsCard";


const Donations = ({ donations, data }) => {

    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  mt-10">
                {
                    data?.map(donation => <DonationsCard key={donation.id} donation={donation} ></DonationsCard>)
                }
            </div>
      {/* footer start */}
      <footer className="footer px-20 py-8 bg-base-200 text-base-content mt-14">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>

  </form>
</footer>
      {/* footer end */}
            
        </div>
    );
};

export default Donations;