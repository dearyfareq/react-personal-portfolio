import React from "react";
import css from "../components/testimon.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../utils/motion";

const Testimon = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      className={` paddings ${css.wrapper}`}
    >
      {/* main container for the items*/}
      <div className={` yPaddings innerWidth ${css.container}`}>
        <div className={` flexCenter ${css.heading}`}>
          <span className="primaryText">That do They say about Us? </span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            facilis! Doloribus hic dolorum culpa provident ducimus,
            necessitatibus excepturi eius consequatur adipisci quos dicta
            obcaecati labore error dolore inventore quibusdam officia.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimon;
