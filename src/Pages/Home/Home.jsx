

import Banner from '../../Componants/Header/Navbar/Banner/Banner';
import Donations from '../../Componants/Header/Navbar/Donations/Donations';
import { useEffect, useState } from 'react';
import filterCategory from '../../js/utility';

const Home = () => {
    const [donations, setDonations] = useState([]);
    const [data, setData] = useState([]);


    const [search, setSearch] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        handleCategorySearch(search)

    }


    const handleInput = (e) => {
        setSearch(e.target.value)

    }


    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    console.log(donations)




    const handleCategorySearch = (searchQuery) => {
        if (searchQuery === "All") {
            setData(donations);
        } else if (searchQuery === "Health") {
            const HealthCategory = filterCategory(donations, "Health");
            setData(HealthCategory);
        } else if (searchQuery === "Education") {
            const EducationCategory = filterCategory(donations, "Education");
            setData(EducationCategory);
        } else if (searchQuery === "Food") {
            const FoodCategory = filterCategory(donations, "Food");
            setData(FoodCategory);
        }
    }



    return (
        <div>
            <Banner search={search} setSearch={setSearch} handleInput={handleInput} handleForm={handleForm} ></Banner>
            <Donations donations={donations} data={data} ></Donations>
        </div>
    );
};

export default Home;









