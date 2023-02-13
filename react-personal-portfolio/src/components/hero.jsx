import React from "react";
import css from "../components/hero.module.scss";
import person from "../../public/person.png";
import logo from "../../public/certificate.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

//don't forget to import images before using them, if so; use {import name}
const Hero = () => {
  return (
    <section className={` paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* upper hero elements */}
        <div className={css.upper}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Guten Tag!
            <br /> I'm Diyari
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            I make simple yet,
            <br /> beautiful artwork
          </motion.span>
        </div>

        {/* center image of the person*/}
        <motion.div 
        className={css.person}
        variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <img src={person} alt="person" />
        </motion.div>

        {/* lower hero elements ( longer than the others)*/}
        <div className={css.lower}>
          <div className={css.skills}>
            <motion.div
              className="primaryText"
              variants={fadeIn("right", "tween", 0.2, 1)}
            >
              +3
            </motion.div>
            <div className="secondaryText">
              <motion.p variants={fadeIn("right", "tween", 0.2, 1)}>
                Years
                <br />
                Designing
              </motion.p>
            </div>
          </div>
          <div className={css.freelance}>
            <motion.img
              src={logo}
              alt="Icon"
              variants={fadeIn("left", "tween", 0.2, 1)}
            />
            <motion.span
              className="secondaryText"
              variants={fadeIn("left", "tween", 0.2, 1)}
            >
              Advance Graphic
            </motion.span>
            <motion.span
              className="secondaryText"
              variants={fadeIn("left", "tween", 0.2, 1)}
            >
              UI/UX Designer
            </motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
