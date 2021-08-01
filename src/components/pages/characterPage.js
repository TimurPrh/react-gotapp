import React from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class CharacterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChar: null,
            error: false
        }
        this.onCharSelected = this.onCharSelected.bind(this);
    }

    gotService = new gotService();

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const charList = (
            <ItemList  
                onItemSelected={this.onCharSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name} (${item.gender})`}/>
        );
        const charDetails = (
            <ItemDetails
                itemId={this.state.selectedChar}
                getData={this.gotService.getCharacter}
                itemType='character'>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        );
        
        return (
            <RowBlock left={charList} right={charDetails}/>
        )
    }
}