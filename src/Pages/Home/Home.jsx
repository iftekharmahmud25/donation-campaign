
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Componants/Header/Navbar/Banner/Banner';
import Donations from '../../Componants/Header/Navbar/Donations/Donations';

const Home = () => {

    const donations = useLoaderData();
  
    return (
        <div>
            <Banner></Banner>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;