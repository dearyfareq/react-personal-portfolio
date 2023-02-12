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
        <div className={css.gallary}>
          <motion.img variants={fadeIn("up", "tween", 0.5, 0.5)} src={img1} />
          <motion.img variants={fadeIn("up", "tween", 0.5, 0.5)} src={img2} />
          <motion.img variants={fadeIn("up", "tween", 0.5, 0.5)} src={img3} />
        </div>
      </div>
    </motion.section>
  );
};
