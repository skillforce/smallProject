import s from './SearchPanel.module.css';


const{searchPanel}=s;

export const SearchPanel=()=>{
    return(
        <input type="text"
        className='form-control search-input'
        placeholder={'Найти сотрудника'}/>
    )
}