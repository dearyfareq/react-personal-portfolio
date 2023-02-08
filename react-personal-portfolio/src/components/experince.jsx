import React from "react";
import css from "../../src/components/experince.module.scss";
//imported the data for the mapping, check data file to adjust as per requirements 
import { projectExperience } from "../utils/data";

const Experince = () => {
  return (
    <div className={css.wrapper}>
      <div
        className={`paddings yPaddings flexCenter innerWidth${css.container}`}
      >
        {/* left slide of experince section, will use mapping and a premade data array*/}
        <div className={css.left}>
          {/* 
            the data is in the form of an array, so we can map it instead of writing it indivisually, we used the index 
            exp with the map method and then extract the icon/name/projects from the objects
          */}
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <div className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span>{exp.projects}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* right slide of experince section*/}
        <div className={css.right}></div>
      </div>
    </div>
  );
};

export default Experince;
