import {EmployeesListItem} from '../EmployeesListItem/EmployeesListItem';
import s from './Employees.module.css';

const {appList} = s;

export const EmployeesList = () => {
    return (
        <div className={appList}>
            <ul className="app-list list-group">
                <EmployeesListItem/>
                <EmployeesListItem/>
                <EmployeesListItem/>
            </ul>
        </div>
    )
}