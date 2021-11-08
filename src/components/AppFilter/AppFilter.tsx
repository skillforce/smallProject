import React from 'react';
import s from './AppFilter.module.css';
import {FilterUsersType} from '../App/App';

const {btnGroupBlock} = s;


type AppFilterPropsType = {
    onSetFilter: (newFilter: FilterUsersType) => void
    filter:FilterUsersType
}


export class AppFilter extends React.Component<AppFilterPropsType> {






    render() {
        const {onSetFilter,filter} = this.props


        const activeClassNameHandler =(btnFilter:FilterUsersType)=>{
            return filter===btnFilter? 'btn btn-light': "btn btn-outline-light"
        }


        return (<div className={btnGroupBlock}>
                <div className="btn-group">
                    <button onClick={()=>onSetFilter('none')}  className={activeClassNameHandler('none')} type={'button'} >
                        Все сотрудники
                    </button>
                    <button onClick={()=>onSetFilter('forIncrease')} className={activeClassNameHandler('forIncrease')} type={'button'} >
                        Сотрудники на повышение
                    </button>
                    <button onClick={()=>onSetFilter('withBigSalary')} className={activeClassNameHandler('withBigSalary')} type={'button'} >
                        З/П больше 1000$
                    </button>
                </div>
            </div>
        )
    }
}