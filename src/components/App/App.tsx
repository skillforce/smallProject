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
export type TogglePropType = 'isIncrease' | 'forRaising'

export type FilterUsersType = 'forIncrease' | 'withBigSalary' | 'none'


const {app, searchPanel} = s


class App extends React.Component<{}, { data: StateDataType[], searchText: string, filter: FilterUsersType }> {

    id = () => 'id' + Math.random().toString(16).slice(2)

    constructor(props: {}) {
        super(props);
        this.state = {
            data: [{id: this.id(), name: 'Denis', salary: 800, isIncrease: false, forRaising: false},
                {id: this.id(), name: 'Oleg', salary: 1200, isIncrease: false, forRaising: false},
                {id: this.id(), name: 'Polina', salary: 930, isIncrease: false, forRaising: false},
                {id: this.id(), name: 'Ivan', salary: 1230, isIncrease: false, forRaising: false}
            ],
            searchText: '',
            filter: 'none' as const
        }

    }

    onDeleteEmployees = (EmployeesId: string) => {
        this.setState(({data}) => ({data: data.filter(t => t.id !== EmployeesId)}))
    }
    onAddEmployees = (name: string, salary: number) => {
        const newEmployers = {id: this.id(), name, salary, isIncrease: false, forRaising: false}
        this.setState(({data}) => ({data: [...data, newEmployers]}))
    }
    onSetPropHandler = (id: string, prop: TogglePropType) => {
        this.setState(({data}) => ({data: data.map(t => t.id === id ? {...t, [prop]: !t[prop]} : t)}))
    }

    onSearchUserHandler = (searchText: string, data: StateDataType[] = this.state.data) => {
        if (searchText === '') {
            return data
        }
        return data.filter(t => t.name.indexOf(searchText) !== -1)
    }
    onFilterUserHandler = (filter: FilterUsersType, data: StateDataType[] = this.state.data) => {
        switch (filter) {
            case 'none':
                return data
            case 'forIncrease':
                return data.filter(t => t.isIncrease)
            case 'withBigSalary':
                return data.filter(t => t.salary > 1000)
            default:
                return data
        }
    }

    onSetFilter = (newFilter: FilterUsersType) => {
        this.setState((state) => ({...state, filter: newFilter}))
    }


    onSetSearchText = (newText: string) => {
        this.setState((state) => ({...state, searchText: newText}))
    }


    render() {

        const {data, searchText, filter} = this.state
        const widget = {
            currentEmployees: data.length,
            forIncrease: data.filter(t => t.isIncrease).length
        }
        const searchData = this.onSearchUserHandler(searchText)
        const afterFilter = this.onFilterUserHandler(filter, searchData)


        return (
            <div className={app}>
                <AppInfo widget={widget}/>

                <div className={searchPanel}>
                    <SearchPanel searchText={searchText} onSetSearchText={this.onSetSearchText}/>
                    <AppFilter filter={filter} onSetFilter={this.onSetFilter}/>
                </div>

                <EmployeesList onSetPropHandler={this.onSetPropHandler}
                               onDeleteEmployees={this.onDeleteEmployees}
                               data={afterFilter}/>

                <EmployeesAddForm onAddEmployees={this.onAddEmployees}/>

            </div>
        )
    }
}

export default App;
