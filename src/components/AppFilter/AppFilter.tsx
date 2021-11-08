import React from 'react';
import s from './AppFilter.module.css';
import {FilterUsersType} from '../App/App';

const {btnGroupBlock} = s;


type AppFilterPropsType = {
    onSetFilter: (newFilter: FilterUsersType) => void
    filter: FilterUsersType
}


export class AppFilter extends React.Component<AppFilterPropsType> {


    render() {
        const {onSetFilter, filter} = this.props

        const btnGroup = [
            {BtnFilter: 'none' as const, label: 'Все сотрудники'},
            {BtnFilter: 'forIncrease' as const, label: ' Сотрудники на повышение'},
            {BtnFilter: 'withBigSalary' as const, label: 'З/П больше 1000$'}
        ]


        const activeClassNameHandler = (btnFilter: FilterUsersType) => {
            return filter === btnFilter ? 'btn btn-light' : 'btn btn-outline-light'
        }


        return (
            <div className="btn-group">
                <div className={btnGroupBlock}>
                    {btnGroup.map(t => <button onClick={() => onSetFilter(t.BtnFilter)}
                                               className={activeClassNameHandler(t.BtnFilter)} type={'button'}>
                        {t.label}
                    </button>)}
                </div>
            </div>
        )
    }
}