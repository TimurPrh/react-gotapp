import React from 'react';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';

export default class BookItem extends React.Component {
    constructor(props) {
        super(props);
    }

    gotService = new gotService();

    render() {
        return(
            <ItemDetails 
            getData={this.gotService.getBook}
            itemId={this.props.bookId}
            itemType={'book'}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}
