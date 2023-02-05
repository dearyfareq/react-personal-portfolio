import React from "react";
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'
import {motion} from "framer-motion"
import {headerVariants} from "../utils/motion"

const Header = () => {
    return(
        //main wrapper - the motion JS library allows us to animate when in initial state and when it becomes in view, check motion.js file for animation details
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>
            {/* items container with flex and auto margin */}
            <div className={`innerWidth ${css.container}`}>
              <div className={css.name}>
                  DIYARI
              </div>
              {/* list items with phone number and icon from react */}
              
              <ul className={` flexCenter ${css.list}`}>
                <li><a href="">services</a></li>
                <li><a href="">experince</a></li>
                <li><a href="">portfolio</a></li>
                <li><a href="">testimonials</a></li>
                <li className={css.phone}>
                    <p>0751-191-3938</p>
                    <BiPhoneCall size ={"40px"} />
                </li>
              </ul>
            </div>
        </motion.div>
    )
}

export default Header