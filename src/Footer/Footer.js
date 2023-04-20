import React from 'react';
import s from './Footer.module.css'
import sCont from "../Common/Styles/Container.module.css";


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sCont.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Zudilin Vadim</h2>
                <div className={s.footer}>
                    <span className={s.span}>1</span>
                    <span className={s.span}>2</span>
                    <span className={s.span}>3</span>
                    <span className={s.span}>4</span>
                </div>
            <div className={s.footer_foot}>© 2023 all rights reserved</div>
            </div>
        </div>
    );
};

