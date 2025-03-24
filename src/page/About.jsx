import React from 'react'

// import local style file 
import './About.css';

// import react icon this service section 
import { IoMdCash } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { TbCashBanknoteOff } from "react-icons/tb";

// import image using this page 
import fristimage from '../asscts/depositphotos_98087272-stock-photo-happy-family-doing-shopping.jpg';
// <---- service section image ----->
import servimg from '../asscts/10536500-removebg-preview.png';

// import user data to show table in API call 

import TableUser from '../component/TableUser';

const About = () => {

    return (
        <>
            {/* <---- main about parent ----->  */}
            <div className="about-page">
                {/* <---- left textarea about and right image  ----->  */}
                <div className="about-content">
                    <div className="about-textarea">
                        <h1>"Seamless <span>Online Shopping <br /> </span>Fast, Secure, and Affordable!"</h1>
                        <p>Discover a seamless online shopping experience with a vast selection of products. From fashion and electronics to home essentials, find everything you need in one place. Enjoy secure payments, fast shipping, and exclusive discounts every day. Our user-friendly interface makes browsing and purchasing easy and convenient. Shop now and elevate your online shopping experience!</p>
                        <button className='about-btn'>get start</button>
                    </div>
                    {/* <---- frist about section image div ----->  */}
                    <div className="about-image">
                        <img src={fristimage} alt="" />
                    </div>
                </div>

                {/* <----------- next section customer service------------->       */}

                    <div className="left-service">
                        {/* <----  about page service left site box ----->  */}
                        <div className="left-site-box">
                            <div>
                                <IoMdCash />
                            <p>"Hassle-Free Support & Cashback"</p>
                            </div>
                            <div>
                                <RiCustomerService2Fill />
                                <p>24/7 Customer Support </p>
                            </div>
                        </div>

                        {/* <----  about page service right site box ----->  */}
                        <div className="right-site-box">
                            <div>
                                <TbTruckDelivery />
                                <p>Fast & Secure Transactions</p>
                            </div>
                            <div>
                                <TbCashBanknoteOff />
                                <p>Free Shipping on All Orders </p>
                            </div>
                        </div>
                    </div>
            </div>   {/* // parent div .about-page // */}

        <TableUser />
        </>
    )
}

export default About;
