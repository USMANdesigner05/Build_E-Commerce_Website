import React from 'react'
import {useNavigate } from 'react-router-dom';

// import css file local 
import './Home.css';
// import image using home page 
import homeimage from '../asscts/home-clone page image png.png';
import Login from './Login';

const Home = () => {

     const navigate = useNavigate(<Login />)
    return (
        <>
            <div className="home-page">

                <div className="home-content">
                    <div className="textarea-home">
                        <h1>"Welcome to shop <br /><span>local store </span><br /> Your Digital Marketplace"</h1>
                        <p>Shop the latest trends and best deals with fast shipping and secure payments. Explore a wide range of products, from fashion to electronics, all in one place!</p>
                        <div className="home-btn-group">
                            <button className='btn-getstart'>get start</button>
                            <button className='btn-login' onClick={()=>{
                                navigate('/Login')
                            }}>Login</button>
                        </div>
                    </div>
                <div className="home-image">
                        <img src={homeimage} alt="" />
                </div>
                </div>
               
       </div>
            {/* home page next section this  */}
            <div className="home-textarea">
                <h1>e commerce store </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odit porro, enim culpa libero tempora quae error odio eum maxime doloribus deserunt eveniet, ex dolor nihil eaque maiores? A voluptates labore modi sapiente numquam quod ipsa consequuntur molestiae sit minus.</p>
            </div>
       
        </>
    )
}

export default Home
