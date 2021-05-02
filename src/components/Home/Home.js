import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProjectOne from '../Projects/ProjectOne';

const Home = () => {
    return (
        <div style={{backgroundColor:'#11b1c1',marginRight: '0px'}}>
            <Navbar></Navbar>
            <Header></Header>
            <h1>My Previous Project</h1>
            <ProjectOne></ProjectOne>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;