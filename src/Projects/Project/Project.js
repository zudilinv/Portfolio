import React from 'react';
import s from './Project.module.css'
import {Navbar} from "../../Navbar/Navbar";
import {Main} from "../../Main/Main";
import sCont from "../../Common/Styles/Container.module.css";
import {Skill} from "../../Skills/Skill/Skill";

export const Project = (props) => {
    return (
     <div className={s.project}>
         <div className={s.icon}>
             <a className={s.icon_icon} href="">Watch</a>
         </div>
         <div className={s.description}>
             <h4 className={s.title}>{props.title}</h4>
             <span className={s.description_description}>{props.description}</span>
         </div>
     </div>
    );
};

