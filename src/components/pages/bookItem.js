import React from 'react';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
<<<<<<< HEAD
=======
import RowBlock from '../rowBlock';
>>>>>>> c38b95c15d791874a3d520c92f248acf42566b25

export default class BookItem extends React.Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state = {
            error: false
        }
=======
>>>>>>> c38b95c15d791874a3d520c92f248acf42566b25
    }

    gotService = new gotService();

<<<<<<< HEAD
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
=======
    render() {
>>>>>>> c38b95c15d791874a3d520c92f248acf42566b25
        return(
            <ItemDetails 
            getData={this.gotService.getBook}
            itemId={this.props.bookId}
            itemType={'book'}>
<<<<<<< HEAD
                {/* > */}
=======
>>>>>>> c38b95c15d791874a3d520c92f248acf42566b25
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}
