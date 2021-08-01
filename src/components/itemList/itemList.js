import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: null,
            error: false
        }
        this.renderItems = this.renderItems.bind(this);
    }

    onError = () => {
        this.setState({
            error:true
        })
    }

    componentDidMount() {
        this.props.getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
            .catch(this.onError);
    }

    renderItems(arr) {
        return arr.map((item) => {
            const label = this.props.renderItem(item);
            return(
                <li 
                    key={item.id}
                    onClick={() => this.props.onItemSelected(item.id)}
                    className="list-group-item">
                    {label}
                </li>
            )
        })
    }
    
    render() {
        const {itemList, error} = this.state;

        if (error) {
            return <p>Ошибка при загрузке itemList</p>
        }

        if(!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}