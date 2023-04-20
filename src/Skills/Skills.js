import React from 'react';
import s from './Skills.module.css'
import sCont from './../Common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";
export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
          <div className={`${sCont.container} ${s.skillsContainer}`}>
                  <h2 className={s.title}>My Skills</h2>
              <div className={s.skills}>
                  <Skill title={"HTML"} description={"Lorem description description description"}/>
                  <Skill title={"CSS"} description={"Lorem description description description description"}/>
                  <Skill title={"JS"} description={"Lorem description description description description description"}/>
              </div>
          </div>
        </div>
    );
};

