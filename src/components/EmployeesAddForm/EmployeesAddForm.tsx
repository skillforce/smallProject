import React, {Component, FormEvent} from 'react';
import './EmployeesAddForm.css';

type EmployeesAddFormStateType = {
    inputNameValue: string
    inputSalaryValue: string
}

type EmployeesFormPropsType = {
    onAddEmployees: (name: string, salary: string) => void
}


export class EmployeesAddForm extends Component <EmployeesFormPropsType, EmployeesAddFormStateType> {

    constructor(props: EmployeesFormPropsType) {
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

    onAddNewEmployees = () => {
        const {onAddEmployees} = this.props
        const {inputNameValue, inputSalaryValue} = this.state
        onAddEmployees(inputNameValue, inputSalaryValue)
        this.setState({inputNameValue: '', inputSalaryValue: ''})
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

                    <button disabled={inputNameValue === '' || inputSalaryValue === ''} onClick={this.onAddNewEmployees}
                            type="button"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>

        )
    }
}