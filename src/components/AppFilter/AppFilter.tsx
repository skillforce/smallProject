import React from 'react';
import s from './AppFilter.module.css';

const {btnGroupBlock}=s;

export const AppFilter = () => {
    return (<div className={btnGroupBlock}>
            <div className="btn-group">
                <button className="btn btn-light" type={'button'}>
                    Все сотрудники
                </button>
                <button className="btn btn-outline-light" type={'button'}>
                    Сотрудники на повышение
                </button>
                <button className="btn btn-outline-light" type={'button'}>
                    З/П больше 1000$
                </button>
            </div>
        </div>
    )
}