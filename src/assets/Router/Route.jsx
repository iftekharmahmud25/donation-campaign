import {   createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home/Home";
import Donation from "../../Pages/Donation/Donation";
import Statistics from "../../Pages/Statistics/Statistics";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import DonationPage from "../../Pages/DonationPage/DonationPage";


const myCreateRoute = createBrowserRouter([
       {
          path : "/",
          element : 
              <MainLayout></MainLayout>,
              errorElement: <ErrorPage></ErrorPage>,
          
          children : [
             {
                 path : "/",
                 element : <Home></Home>,
                 loader : ()=> fetch('/donation.json')
             },
             {
                 path : "/donation",
                 element: <Donation></Donation>
             },
             {
                 path : "/statistics",
                 element : <Statistics></Statistics>
             },
             {
                 path : "/donation/:id",
                 element : <DonationPage></DonationPage>,
                 loader : ()=> fetch('/donation.json')
             }
          ]
       }
])








export default myCreateRoute;