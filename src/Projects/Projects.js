import React from 'react';
import s from './Projects.module.css'
import {Navbar} from "../Navbar/Navbar";
import {Main} from "../Main/Main";
import sCont from "../Common/Styles/Container.module.css";
import {Skill} from "../Skills/Skill/Skill";
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectBlock}>
            <div className={`${sCont.container} ${s.projectsContainer}`}>
            <h2 className={s.title}>My Project</h2>
                <div className={s.projects}>
                    <Project title={"Counter"} description={"Lorem description description description description"}/>
                    <Project title={"Todo List"} description={"Lorem description description description description"}/>
                </div>
            </div>
        </div>

    );
};

