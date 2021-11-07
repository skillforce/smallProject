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

        const OnClickToggleHandler = (e: any, id: string) => {
                onSetPropHandler(id, e.currentTarget.getAttribute('data-toggle'))
        }


        const liClassName = `list-group-item d-flex justify-content-between ${isIncrease ? 'increase' : ''} ${forRaising ? 'like' : ''}`

        return (
            <li className={liClassName}>
                <span onClick={(e) => {
                    OnClickToggleHandler(e, id)
                }} className="list-group-item-label" data-toggle={'isIncrease'}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={(e) => {
                        OnClickToggleHandler(e, id)
                    }} type="button"
                            className="btn-cookie btn-sm " data-toggle={'forRaising'}>
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


