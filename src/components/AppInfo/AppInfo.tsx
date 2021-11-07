import React from 'react';
import s from './AppInfo.module.css';

const {appInfo} = s

type AppInfoPropsType = {
    widget: {
        currentEmployees: number,
        forIncrease: number
    }
}

export const AppInfo = (props: AppInfoPropsType) => {
    const {widget} = props;
    const {currentEmployees, forIncrease} = widget
    return (
        <div className={appInfo}>
            <h1>Учет сотрудников в вкомпании </h1>
            <h2>Общее число сотрудников: {currentEmployees} </h2>
            <h3>Премию получат: {forIncrease} </h3>
        </div>
    )
}