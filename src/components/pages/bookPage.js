import React from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';
import { withRouter } from 'react-router';

class BookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBook: null,
            error: false
        }
        // this.onBookSelected = this.onBookSelected.bind(this);
    }

    gotService = new gotService();

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    // onBookSelected(id) {
    //     this.setState({
    //         selectedBook: id
    //     })
    // }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const bookList = (
            <ItemList 
                getData={this.gotService.getAllBooks}
                onItemSelected={(itemId) => this.props.history.push(itemId)}
                renderItem={(a) => `${a.name}`}/>
        );

        const bookDetails = (
            <ItemDetails 
            getData={this.gotService.getBook}
            itemId={this.state.selectedBook}
            itemType={'book'}>
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        );

        return(
            <RowBlock left={bookList} right={bookDetails}/>
        )
    }
}

export default withRouter(BookPage);