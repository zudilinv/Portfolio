import React from 'react';
import s from './Contacts.module.css'
import sCont from './../Common/Styles/Container.module.css'
export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sCont.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contacts}>
                    <input className={s.input} type={"text"}/>
                    <input className={s.input} type={"text"}/>
                    <textarea className={s.input}/>
                </form>
                <button className={s.btn}>Send</button>
            </div>
        </div>
    );
};

