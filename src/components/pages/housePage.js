import React from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHouse: null,
            error: false
        }
        this.onHouseSelected = this.onHouseSelected.bind(this);
    }

    gotService = new gotService();

    onHouseSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
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

        const bookList = (
            <ItemList
                getData={this.gotService.getAllHouses}
                onItemSelected={this.onHouseSelected}
                renderItem={(a) => `${a.name}`}/>
        );

        const bookDetails = (
            <ItemDetails
            itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse}
            itemType='house'>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='AncestralWeapons'/>
            </ItemDetails>
        );
        return(
            <RowBlock left={bookList} right={bookDetails}/>
        )
    }
}