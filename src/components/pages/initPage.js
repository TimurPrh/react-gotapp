import React from 'react';
import {Col, Row} from 'reactstrap';
import RandomChar from '../randomChar';

export default class InitPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleChar: true
        }
        this.toggleRandomChar = this.toggleRandomChar.bind(this);
    }

    toggleRandomChar() {
        this.setState({
            visibleChar: !this.state.visibleChar
        });
    }

    render() {
        const visibleChar = this.state.visibleChar ? <RandomChar/> : null;
        return(
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    <h3>Main Page</h3>
                    {visibleChar}
                    <button
                        className='btn-toggle'
                        onClick={this.toggleRandomChar}>Toggle random character
                    </button>
                </Col>
            </Row>
        )
    }
}