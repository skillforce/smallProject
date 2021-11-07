import React, {Component} from 'react';
import './EmployeesListItem.css';


export type EmployeesListItemPropsType = {
    name: string
    salary: number
    id: string
    isIncrease: boolean
    forRaising: boolean
    onDeleteEmployees: (EmployeesId: string) => void
    onSetForRaisingHandler: (id: string) => void
    onSetIsIncreaseHandler: (id: string) => void
}


export class EmployeesListItem extends Component<EmployeesListItemPropsType> {

    render() {
        const {
            isIncrease,
            forRaising,
            onSetForRaisingHandler,
            onSetIsIncreaseHandler,
            id,
            name,
            salary,
            onDeleteEmployees
        } = this.props;

        const liClassName = `list-group-item d-flex justify-content-between ${isIncrease ? 'increase' : ''} ${forRaising ? 'like' : ''}`

        return (
            <li className={liClassName}>
                <span onClick={() => {
                    onSetForRaisingHandler(id)
                }} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={() => onSetIsIncreaseHandler(id)} type="button"
                            className="btn-cookie btn-sm ">
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


