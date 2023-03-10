import React, { useState } from "react";
import css from './Header.module.scss'
import {BiPhoneCall, BiMenuAltRight} from 'react-icons/bi'
import {motion} from "framer-motion"
import {sideMenu, staggerContainer, fadeIn} from "../utils/motion"
import useHeaderShadow from "../hooks/useHeaderShadow";

const Header = () => {

    //use state for the menu/list icon
    const [listOpen, listdrop] = useState(false);
    const headerShadow = useHeaderShadow();

    return(
        //main wrapper - the motion JS library allows us to animate when in initial state and when it becomes in view, check motion.js file for animation details
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}
        style={{boxShadow: headerShadow}}
        
        >
            {/* items container with flex and auto margin */}
            <motion.div 
            className={`innerWidth ${css.container}`}
            variants={fadeIn("down", "tween", 0.2, 1)}
            >
              <div className={css.name}>
                  DIYARI
              </div>
              {/* list items with phone number and icon from react */}
              
              <ul 
              className={` flexCenter ${css.list}`}
              style={sideMenu(listOpen)}
              >
                <li><a href="">services</a></li>
                <li><a href="">experince</a></li>
                <li><a href="">portfolio</a></li>
                <li><a href="">testimonials</a></li>
                <li className={css.phone}>
                    <p>0751-191-3938</p>
                    <BiPhoneCall size ={"40px"} />
                </li>
              </ul>

              {/* the div below is the icon which when clicked, plays a function to move the list items on screens with small client.widths*/}
              <div 
              className={css.listdrop}
              onClick={()=> listdrop((prev) => !prev)}
              >
                <BiMenuAltRight size={"30px"} />
              </div>
            </motion.div>
        </motion.div>
    )
}

export default Header