import React from 'react';
import myImg from '../../file-img/my-one.png';

const Header = () => {
    return (
        <div className="d-flex flex-row justify-content-center pt-5">
            <div className="col-md-5 align-self-center">
                <h2 className="offset-3">Hi Guys, I'm Mahfuz Antor</h2>
                <p className="offset-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nobis obcaecati voluptates voluptas totam necessitatibus!</p>
            </div>
            <div className="col-md-4">
                <img style={{width:'100%', height: '100%'}} src={myImg} alt=""/>
            </div>
            
        </div>
    );
};

export default Header;