import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import BlogDetails from './BlogDetails';


const Blogs = () => {
    return (
        <div   style={{backgroundColor: '#111'}}>
           <Navbar></Navbar>
           <Header></Header>
           <BlogDetails></BlogDetails>
           <Footer></Footer>
        </div>
    );
};

export default Blogs;