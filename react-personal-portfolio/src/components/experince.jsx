import React from "react";
import css from "../../src/components/experince.module.scss";
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion";
//imported the data for the mapping, check data file to adjust as per requirements 
import { projectExperience, WhatDoIHelp } from "../utils/data";

const Experince = () => {
  return (
    <motion.section 
     className={css.wrapper}
     initial="hidden"
     whileInView="show"
     variants={staggerContainer}
     viewport={{once: false, amount: 0.25}}

     >
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        {/* left slide of experince section, will use mapping and a premade data array*/}
        <div className={css.left}>
          {/* 
            the data is in the form of an array, so we can map it instead of writing it indivisually, we used the index 
            exp with the map method and then extract the icon/name/projects from the objects
          */}
          {projectExperience.map((exp, i) => {
            return (
              // the motion uses tween from the right as well!
              <motion.div 
              className={css.exp} 
              key={i}
              variants={fadeIn("right","tween",(i+1)*0.3,0.2)}
              >
                <div className="flexCenter" style={{background: exp.bg}}>
                  <exp.icon size={25} color="white" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects} projects</span>
                </div>
              </motion.div >
            );
          })}
        </div>

        {/* right slide of experince section*/}
        <motion.div 
        // the motion uses tween from the top as well!
        className={`${css.right}`}
        variants={fadeIn("up","tween",0.2,1)}
        >
         <span className="primaryText">How do I perform?</span><br/> 

         {/* mapping out the two paragraphs */}
          {
            WhatDoIHelp.map((paragraph, i) =>{
              return <span className="secondaryText" key={i}>{paragraph}<br/></span>
            })
          }
          {/* adding extra bold text */}
          <div className={` flexCenter ${css.extra}`}>
            <div className={` flexCenter ${css.extr}`}>
              <span className="primaryText">286+</span>
              <span className="secondaryText">Projects</span>
              <span className="secondaryText">Completed</span>
            </div>
            <div className={` flexCenter ${css.extr}`}>
              <span className="primaryText">19+</span>
              <span className="secondaryText">Happy</span>
              <span className="secondaryText">Clients</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experince;
