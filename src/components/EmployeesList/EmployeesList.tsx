import React from 'react';
import {EmployeesListItem, EmployeesListItemType} from '../EmployeesListItem/EmployeesListItem';
import s from './Employees.module.css';


const {appList} = s;
export type EmployeesListPropsType = {
    data: EmployeesListItemType[]
    onDeleteEmployees: (EmployeesId: string) => void
}

export class EmployeesList extends React.Component<EmployeesListPropsType> {

    render() {
        let {data, onDeleteEmployees} = this.props;
        return (
            <div className={appList}>
                <ul className="app-list list-group">
                    {data.map(t => <EmployeesListItem onDeleteEmployees={onDeleteEmployees} key={t.id} {...t}/>)}
                </ul>
            </div>
        )
    }
}