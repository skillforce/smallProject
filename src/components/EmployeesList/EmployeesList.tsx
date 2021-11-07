import React from 'react';
import {EmployeesListItem} from '../EmployeesListItem/EmployeesListItem';
import s from './Employees.module.css';
import {StateDataType} from '../App/App';


const {appList} = s;


export type EmployeesListPropsType = {
    data: StateDataType[]
    onDeleteEmployees: (EmployeesId: string) => void
    onSetForRaisingHandler: (id: string) => void
    onSetIsIncreaseHandler: (id: string) => void
}

export const EmployeesList = (props: EmployeesListPropsType) => {
    let {data, onDeleteEmployees, onSetForRaisingHandler, onSetIsIncreaseHandler} = props;
    return (
        <div className={appList}>
            <ul className="app-list list-group">
                {data.map(t => <EmployeesListItem onSetIsIncreaseHandler={onSetIsIncreaseHandler}
                                                  onSetForRaisingHandler={onSetForRaisingHandler}
                                                  onDeleteEmployees={onDeleteEmployees}
                                                  key={t.id} {...t}/>)}
            </ul>
        </div>
    )
}