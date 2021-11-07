import React from 'react';
import {AppInfo} from '../AppInfo/AppInfo';
import s from './app.module.css';
import {SearchPanel} from '../SearchPanel/SearchPanel';
import {AppFilter} from '../AppFilter/AppFilter';
import {EmployeesList} from '../EmployeesList/EmployeesList';
import {EmployeesAddForm} from '../EmployeesAddForm/EmployeesAddForm';



export type StateDataType = {
    name: string
    salary: number
    id: string
    isIncrease: boolean
    forRaising: boolean
}
export type TogglePropType='isIncrease'|'forRaising'


const {app, searchPanel} = s


class App extends React.Component<{}, { data: StateDataType[] }> {

    id = () => 'id' + Math.random().toString(16).slice(2)

    constructor(props: {}) {
        super(props);
        this.state = {
            data: [{id: this.id(), name: 'Denis', salary: 800, isIncrease: false, forRaising: false},
                {id: this.id(), name: 'Oleg', salary: 1200, isIncrease: false, forRaising: false},
                {id: this.id(), name: 'Polina', salary: 930, isIncrease: false, forRaising: false},
                {id: this.id(), name: 'Ivan', salary: 1230, isIncrease: false, forRaising: false}
            ]
        }

    }

    onDeleteEmployees = (EmployeesId: string) => {
        this.setState(({data}) => ({data: data.filter(t => t.id !== EmployeesId)}))
    }
    onAddEmployees = (name: string, salary: number) => {
        const newEmployers = {id: this.id(), name, salary, isIncrease: false, forRaising: false}
        this.setState(({data}) => ({data: [...data, newEmployers]}))
    }
    onSetPropHandler = (id: string,prop:TogglePropType) => {
        this.setState(({data}) => ({data: data.map(t => t.id === id ? {...t, [prop]: !t[prop]} : t)}))
    }



    render() {

        const {data} = this.state
        const widget = {
            currentEmployees: data.length,
            forIncrease: data.filter(t => t.isIncrease).length
        }


        return (
            <div className={app}>
                <AppInfo widget={widget}/>

                <div className={searchPanel}>
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList onSetPropHandler={this.onSetPropHandler}
                               onDeleteEmployees={this.onDeleteEmployees}
                               data={data}/>

                <EmployeesAddForm onAddEmployees={this.onAddEmployees}/>

            </div>
        );
    }
}

export default App;
