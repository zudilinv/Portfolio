import React from 'react';
import s from './Main.module.css'
import sCont from './../Common/Styles/Container.module.css'
export const Main = () => {
    return (
        <div className={s.main}>
            <div className={sCont.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1 className={s.title}>I`m Zudilin Vadim</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

