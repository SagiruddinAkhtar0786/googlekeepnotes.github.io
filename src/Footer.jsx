import React from 'react';


const Footer = () => {
    const year = new Date().getFullYear();
    return(

        <>
          <footer>
              <p>Copyright {year} ©️ srakhtar1997@gmail.com</p>
          </footer>
        </>
    );
};

export default Footer;