import {Component, FormEvent, SyntheticEvent} from 'react';
import React from 'react';
import './EmployeesAddForm.css';

type EmployeesAddFormStateType = {
    inputNameValue: string
    inputSalaryValue: string
}


export class EmployeesAddForm extends Component <{}, EmployeesAddFormStateType> {

    constructor(props: {}) {
        super(props)
        this.state = {
            inputNameValue: '',
            inputSalaryValue: ''
        }
    }

    onSetInputNameValue = (e: FormEvent<HTMLInputElement>) => {
        this.setState({inputNameValue: e.currentTarget.value})

    }
    onSetInputSalaryValue = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({inputSalaryValue: e.currentTarget.value})
    }


    render() {
        const {inputNameValue, inputSalaryValue} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           value={inputNameValue}
                           onChange={this.onSetInputNameValue}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           value={inputSalaryValue}
                           onChange={this.onSetInputSalaryValue}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>

        )
    }
}