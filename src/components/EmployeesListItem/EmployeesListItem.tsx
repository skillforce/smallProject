import React, {Component} from 'react';
import './EmployeesListItem.css';

export type EmployeesListItemType = {
    name: string
    salary: number
    id: string
    isIncrease: boolean
    forRaising: boolean
}
export type EmployeesListItemPropsType = {
    name: string
    salary: number
    id: string
    isIncrease: boolean
    forRaising: boolean
    onDeleteEmployees: (EmployeesId: string) => void
}
export type EmployeesListItemStateType = {
    isIncrease: boolean
    forRaising: boolean
}

export class EmployeesListItem extends Component<EmployeesListItemPropsType, EmployeesListItemStateType> {
    constructor(props: EmployeesListItemPropsType) {
        super(props);
        const {isIncrease, forRaising} = props
        this.state = {
            isIncrease: isIncrease,
            forRaising: forRaising
        }
    }

    onSetIsIncreaseHandler = () => {
        this.setState(({isIncrease}) => ({isIncrease: !isIncrease}))
    }
    onSetForRaisingHandler = () => {
        this.setState(({forRaising}) => ({forRaising: !forRaising}))
    }


    render() {
        const {id, name, salary, onDeleteEmployees} = this.props;
        const {isIncrease, forRaising} = this.state
        const liClassName = `list-group-item d-flex justify-content-between ${isIncrease ? 'increase' : ''} ${forRaising ? 'like' : ''}`
        return (
            <li className={liClassName}>
                <span onClick={this.onSetForRaisingHandler} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={this.onSetIsIncreaseHandler} type="button"
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


