import React, {ChangeEvent, Component} from 'react';
import './EmployeesListItem.css';
import {TogglePropType} from '../App/App';


export type EmployeesListItemPropsType = {
    name: string
    salary: string
    id: string
    isIncrease: boolean
    forRaising: boolean
    onDeleteEmployees: (EmployeesId: string) => void
    onSetPropHandler: (id: string, prop: TogglePropType) => void
    onSalaryChange: (newSalary: string, id: string) => void
}
export type EmployeesListItemStateType = {
    editMode: boolean
}


export class EmployeesListItem extends Component<EmployeesListItemPropsType, EmployeesListItemStateType> {

    constructor(props: EmployeesListItemPropsType) {
        super(props);
        this.state = {
            editMode: false
        }

    }

    onSetEditMode = () => {
        this.setState(({editMode}) => ({editMode: !editMode}))
    }


    render() {
        const {editMode} = this.state
        const {
            isIncrease,
            forRaising,
            onSetPropHandler,
            id,
            name,
            salary,
            onDeleteEmployees,
            onSalaryChange
        } = this.props;

        const OnClickToggleHandler = (prop: TogglePropType, id: string) => {
            onSetPropHandler(id, prop)
        }
        const onChangeSalaryHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onSalaryChange(e.currentTarget.value, id)
        }


        const liClassName = `list-group-item d-flex justify-content-between ${isIncrease ? 'increase' : ''} ${forRaising ? 'like' : ''}`

        const salaryIsEdit = editMode ?
            <input tabIndex={0} autoFocus={true} onBlur={this.onSetEditMode} type="number"
                   className="list-group-item-input" value={salary} onChange={onChangeSalaryHandler}/>
            :
            <span onDoubleClick={this.onSetEditMode} className="d-flex justify-content-center"
                  style={{minWidth: '300px'}}>{salary + ' ' + '$'}</span>


        return (
            <li className={liClassName}>
                <span onClick={() => OnClickToggleHandler('isIncrease', id)} className="list-group-item-label"
                      style={{minWidth: '200px'}}>{name}</span>
                {salaryIsEdit}
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={() => {
                        OnClickToggleHandler('forRaising', id)
                    }} type="button"
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


