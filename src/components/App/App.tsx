import React from 'react';
import {AppInfo} from '../AppInfo/AppInfo';
import s from './app.module.css';
import {SearchPanel} from '../SearchPanel/SearchPanel';
import {AppFilter} from '../AppFilter/AppFilter';
import {EmployeesList} from '../EmployeesList/EmployeesList';
import {EmployeesAddForm} from '../EmployeesAddForm/EmployeesAddForm';
import {EmployeesListItemType} from '../EmployeesListItem/EmployeesListItem';


export type DataType = EmployeesListItemType[]


const {app, searchPanel} = s


const Data: DataType = [
    {id: 1, name: 'Denis', salary: 800, isIncrease: false, forRaising: false},
    {id: 2, name: 'Oleg', salary: 1200, isIncrease: false, forRaising: false},
    {id: 3, name: 'Polina', salary: 930, isIncrease: false, forRaising: false},
    {id: 4, name: 'Ivan', salary: 1230, isIncrease: false, forRaising: false}
]


const App = () => (
    <div className={app}>
        <AppInfo/>

        <div className={searchPanel}>
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList data={Data}/>

        <EmployeesAddForm/>

    </div>
);

export default App;
