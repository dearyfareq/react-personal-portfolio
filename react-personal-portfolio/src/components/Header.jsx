import React from "react";
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'

const Header = () => {
    return(
        //main wrapper
        <div className={`paddings ${css.wrapper}`}>
            {/* items container with flex and auto margin */}
            <div className={`flexCenter innerWidth ${css.container}`}>
              <div className={css.name}>
                  Diyari
              </div>
              {/* list items with phone number and icon from react */}
              <ul>
                <li><a href="">services</a></li>
                <li><a href="">experince</a></li>
                <li><a href="">portfolio</a></li>
                <li><a href="">testimonials</a></li>
                <li>
                    <p>0751-191-3938</p>
                    <BiPhoneCall size ={"40px"} />
                </li>
              </ul>
            </div>
        </div>
    )
}

export default Header