// ReactImports
import React from 'react';
import styles from './MainPage.module.css';

function SmallCard({prop}){
    return(
        <div className={styles.MainPage_Content_One_Element}>

            <a href={prop[0]}>
            <img src={prop[1]} alt="middle4"/>
            </a>
            <div> {prop[2]} </div>
        </div>
      )
    }
export default SmallCard;
