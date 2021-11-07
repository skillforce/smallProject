import React from 'react';
import {EmployeesListItem, EmployeesListItemType} from '../EmployeesListItem/EmployeesListItem';
import s from './Employees.module.css';


const {appList} = s;
export type EmployeesListPropsType = {
    data: EmployeesListItemType[]
}
export type EmployeesListStateType = {
    data: EmployeesListItemType[]
}

export class EmployeesList extends React.Component<EmployeesListPropsType, EmployeesListStateType> {


    constructor(props: EmployeesListPropsType) {
        super(props);
        const {data} = props
        this.state = {
            data: data
        }
    }

    onDeleteEmployees = (EmployeesId: number) => {
        this.setState(({data}) => ({data: data.filter(t => t.id != EmployeesId)}))
    }

    render() {
        let {data} = this.state;
        return (
            <div className={appList}>
                <ul className="app-list list-group">
                    {data.map(t => <EmployeesListItem onDeleteEmployees={this.onDeleteEmployees} key={t.id} {...t}/>)}
                </ul>
            </div>
        )
    }
}