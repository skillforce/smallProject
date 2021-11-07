import {Component} from 'react';
import React from 'react';
import './EmployeesListItem.css';

export type EmployeesListItemType = {
    name: string
    salary: number
    id: number
    isIncrease: boolean
    forRaising: boolean
}
export type EmployeesListItemStateType = {
    isIncrease: boolean
    forRaising: boolean
}

export class EmployeesListItem extends Component<EmployeesListItemType, EmployeesListItemStateType> {
    constructor(props: EmployeesListItemType) {
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
        const {name, salary} = this.props;
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

                    <button type="button"
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


