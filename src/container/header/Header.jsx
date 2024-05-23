import React from 'react';
import './header.css';
import image_one from '/Users/alex/six-consulting-app/src/assets/Asset 10ahahahhaha.webp';
import phone_banner from '/Users/alex/six-consulting-app/src/assets/Asset 3phone.webp';


const Header = () => {
  return (
        <div className ="sixn__header-content__banner" id="home">

      
            <div class = "image-banner">
              <img className = "banImg" src = {image_one} alt = "banner"/>
              <img ClassName = "phoneBan" src = {phone_banner} alt="phone banner"/>
            </div>

        </div>
          

  )
}

export default Header