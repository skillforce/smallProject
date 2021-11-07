import React from 'react';
import {EmployeesListItem} from '../EmployeesListItem/EmployeesListItem';
import s from './Employees.module.css';
import {StateDataType, TogglePropType} from '../App/App';


const {appList} = s;


export type EmployeesListPropsType = {
    data: StateDataType[]
    onDeleteEmployees: (EmployeesId: string) => void
    onSetPropHandler: (id: string,prop:TogglePropType) => void

}

export const EmployeesList = (props: EmployeesListPropsType) => {
    let {data, onDeleteEmployees, onSetPropHandler} = props;
    return (
        <div className={appList}>
            <ul className="app-list list-group">
                {data.map(t => <EmployeesListItem onSetPropHandler={onSetPropHandler}
                                                  onDeleteEmployees={onDeleteEmployees}
                                                  key={t.id} {...t}/>)}
            </ul>
        </div>
    )
}