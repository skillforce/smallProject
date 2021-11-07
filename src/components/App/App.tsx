import React from 'react';
import {AppInfo} from '../AppInfo/AppInfo';
import s from './app.module.css';
import {SearchPanel} from '../SearchPanel/SearchPanel';
import {AppFilter} from '../AppFilter/AppFilter';
import {EmployeesList} from '../EmployeesList/EmployeesList';
import {EmployeesAddForm} from '../EmployeesAddForm/EmployeesAddForm';
import {EmployeesListItemType} from '../EmployeesListItem/EmployeesListItem';


const {app, searchPanel} = s

const id1 = 'id' + Math.random().toString(16).slice(2)
const id2 = 'id' + Math.random().toString(16).slice(2)
const id3 = 'id' + Math.random().toString(16).slice(2)
const id4 = 'id' + Math.random().toString(16).slice(2)


class App extends React.Component<{}, { data: EmployeesListItemType[] }> {

    constructor(props: {}) {
        super(props);
        this.state = {
            data: [{id: id1, name: 'Denis', salary: 800, isIncrease: false, forRaising: false},
                {id: id2, name: 'Oleg', salary: 1200, isIncrease: false, forRaising: false},
                {id: id3, name: 'Polina', salary: 930, isIncrease: false, forRaising: false},
                {id: id4, name: 'Ivan', salary: 1230, isIncrease: false, forRaising: false}]
        }
    }

    onDeleteEmployees = (EmployeesId: string) => {
        this.setState(({data}) => ({data: data.filter(t => t.id !== EmployeesId)}))
    }
    onAddEmployees = (name: string, salary: number) => {
        const newId = 'id' + Math.random().toString(16).slice(2)
        const newEmployers: EmployeesListItemType = {id: newId, name, salary, isIncrease: false, forRaising: false}
        this.setState(({data}) => ({data: [...data, newEmployers]}))
    }


    render() {
        const {data} = this.state

        return (
            <div className={app}>
                <AppInfo/>

                <div className={searchPanel}>
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList onDeleteEmployees={this.onDeleteEmployees} data={data}/>

                <EmployeesAddForm onAddEmployees={this.onAddEmployees}/>

            </div>
        );
    }
}

export default App;
