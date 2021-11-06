import React from 'react';
import {AppInfo} from '../AppInfo/AppInfo';
import s from './app.module.css';
import {SearchPanel} from '../SearchPanel/SearchPanel';
import {AppFilter} from '../AppFilter/AppFilter';
import {EmployeesList} from '../EmployeesList/EmployeesList';
import {EmployeesAddForm} from '../EmployeesAddForm/EmployeesAddForm';

const {app, searchPanel} = s

const App = () => (
    <div className={app}>
        <AppInfo/>

        <div className={searchPanel}>
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList/>

        <EmployeesAddForm/>

    </div>
);

export default App;
