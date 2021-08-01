import React, {Component} from 'react';
import './itemDetails.css';

const Field = ({item, field, label}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field}

export default class ItemDetails extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            item: null,
            error: false
        }
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    updateItem() {
        if (this.props.itemId === null) {
            return;
        }

        this.props.getData(this.props.itemId)
            .then((item) => {
                this.setState({item})
            })
            .catch(this.onError)
        // this.foo.bar = 0;
    }

    render() {
        const {item, error} = this.state;

        if (error) {
            return <p>Ошибка при загрузке itemDetails</p>
        }

        let itemType = this.props.itemType;
        // if (!itemType) {
        //     itemType = 'item';
        // }

        if (item === null) {
            return <span className="select-error">Please, select a {itemType}</span>
        }

        for (let key in item) {
            if (!item[key] || item[key] === '') {
                item[key] = '-';
            }
        }

        const {name} = item;

        return (
            <div className="item-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
};

ItemDetails.defaultProps = {
    itemType: 'item'
};