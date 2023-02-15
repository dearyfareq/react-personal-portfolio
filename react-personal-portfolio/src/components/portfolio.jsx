import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../utils/motion";
import css from "./portfolio.module.scss";

//importing img using file path and name
import img1 from "../../public/showCase1.png";
import img2 from "../../public/showCase2.png";
import img3 from "../../public/showCase3.png";
export const Portfolio = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={` paddings ${css.wrapper}`}
    >
      <div className={` innerWidth flexCenter ${css.container}`}>
        {/* text and heading*/}
        <div className={css.heading}>
          <div>
            <span className="primaryText">My Recent Projects</span>
            <p style={{ marginTop: "10px" }}>
              In Different Fields and Departments
            </p>
          </div>
          <span className="secondaryText">See More Work</span>
        </div>

        {/* img sliders / gallary*/}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className={css.gallary}>
          <img  src={img1} />
          <img  src={img2} />
          <img  src={img3} />
        </motion.div >
      </div>
    </motion.section>
  );
};
