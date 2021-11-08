import React, {Component, SyntheticEvent} from 'react';
import './EmployeesListItem.css';
import {TogglePropType} from '../App/App';


export type EmployeesListItemPropsType = {
    name: string
    salary: number
    id: string
    isIncrease: boolean
    forRaising: boolean
    onDeleteEmployees: (EmployeesId: string) => void
    onSetPropHandler: (id: string, prop: TogglePropType) => void
}


export class EmployeesListItem extends Component<EmployeesListItemPropsType> {

    render() {
        const {
            isIncrease,
            forRaising,
            onSetPropHandler,
            id,
            name,
            salary,
            onDeleteEmployees
        } = this.props;

        const OnClickToggleHandler = (prop: TogglePropType, id: string) => {
            onSetPropHandler(id, prop)
        }


        const liClassName = `list-group-item d-flex justify-content-between ${isIncrease ? 'increase' : ''} ${forRaising ? 'like' : ''}`

        return (
            <li className={liClassName}>
                <span onClick={(e) => {
                    OnClickToggleHandler('isIncrease', id)
                }} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={(e) => {
                        OnClickToggleHandler('forRaising', id)
                    }} type="button"
                            className="btn-cookie btn-sm " >
                        <i className="fas fa-cookie">

                        </i>
                    </button>

                    <button onClick={() => onDeleteEmployees(id)} type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash">

                        </i>
                    </button>
                    <i className="fas fa-star">

                    </i>
                </div>
            </li>
        )
    }


}


