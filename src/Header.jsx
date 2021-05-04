import React from 'react';
import logo from'./image/brand.jpg';

const Header = ()=>{
    return(

        <>
           <div className="header">
           <div className="brand">
               <img src={logo} alt="logo" width="70" height="50"/>
               <h1 className="headNote">Add Note</h1>
           </div>
           </div>
        </>
    );
};

export default Header;