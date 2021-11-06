import React from 'react';
import s from './AppInfo.module.css';

const{appInfo}=s

export const AppInfo=()=> {
    return (
        <div className={appInfo}>
            <h1>Учет сотрудников в вкомпании № </h1>
            <h2>Общее число сотрудников: </h2>
            <h3>Премию получат: </h3>
        </div>
    )
}