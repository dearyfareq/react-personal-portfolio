import React from "react";
import css from "../components/hero.module.scss";
import person from "../../public/person.png";
import logo from "../../public/certificate.png";
import {motion} from "framer-motion";
import { staggerContainer } from "../utils/motion";
//don't forget to import images before using them, if so; use {import name}
const Hero = () => {
  return (
    <section className={` paddings ${css.wrapper}`}>
      <motion.div
       initial="hidden"
       whileInView="show"
       variants={staggerContainer}
       viewport={{once: false, amount: 0.25}}
       className={`innerWidth ${css.container}`}
      >
          {/* upper hero elements */}
          <div className={css.upper}>
            <span className="primaryText">
              Guten Tag!
              <br /> I'm Diyari
            </span>
            <span className="secondaryText">
              I make simple yet,
              <br /> beautiful artwork
            </span>
          </div>

          {/* center image of the person*/}
          <div className={css.person}>
            <img src={person} alt="person" />
          </div>

          {/* lower hero elements */}
          <div className={css.lower}>
            <div className={css.skills}>
              <div className="primaryText">+3</div>
              <div className="secondaryText">
                <p>
                  Years
                  <br />
                  Designing
                </p>
              </div>
            </div>
            <div className={css.freelance}>
              <img src={logo} alt="Icon" />
              <span className="secondaryText">Advance Graphic</span>
              <span className="secondaryText">UI/UX Designer</span>
            </div>
          </div>
      </motion.div>
    </section>
  );
};

export default Hero;
