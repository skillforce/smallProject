import React from 'react';
import {EmployeesListItem, EmployeesListItemType} from '../EmployeesListItem/EmployeesListItem';
import s from './Employees.module.css';


const {appList} = s;
export type EmployeesListPropsType = {
    data: EmployeesListItemType[]
}

export const EmployeesList = ({data}: EmployeesListPropsType) => {
    return (
        <div className={appList}>
            <ul className="app-list list-group">
                {data.map(t => <EmployeesListItem  key={t.id} {...t}/>)}
            </ul>
        </div>
    )
}