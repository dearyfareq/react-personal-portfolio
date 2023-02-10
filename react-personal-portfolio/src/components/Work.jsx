import React from "react";
import css from "./Work.module.scss";
import { workExp } from "../utils/data";
import { motion } from "framer-motion";
import { staggerChildren } from "../utils/motion";

const Work = () => {
  return (
    //preplaced the motion file for animation
    <motion.section
      className={`paddings ${css.wrapper}`}
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className={` flexCenter innerWidth ${css.container}`}>
        <span className="primaryText yPaddings">My work Experince</span>

        {/* mapping out the data for the workexp using the same data.js file from before*/}
        <div className={` flexCenter ${css.experience}`}>
          {workExp.map((exp, i) => {
            return (
              <div className={` flexCenter ${css.exp}`} key={i}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;