import React, {ChangeEvent} from 'react';


type SearchPanelPropsType = {
    onSetSearchText: (newText: string) => void
    searchText: string

}

type SearchPanelStateType = {
    inputValue: string
}


export class SearchPanel extends React.Component<SearchPanelPropsType, SearchPanelStateType> {

    onSetInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {onSetSearchText} = this.props;
        onSetSearchText(e.currentTarget.value)
    }


    render() {

        const {searchText} = this.props;

        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder={'Найти сотрудника'}
                   value={searchText}
                   onChange={this.onSetInputValueHandler}/>
        )
    }
}