// ReactImports
import React from 'react';
import styles from './MainPage.module.css';

function MediumCard({prop}){
    return(
        <div className={styles.MainPage_Content_Two_Element}>
            <a href={prop[0]}>
            <img src={prop[1]} alt="middle1"/>
            </a>
            <div>{prop[2]}</div>
            <span>{prop[3]}</span>
        </div>
      )
    }
export default MediumCard;
