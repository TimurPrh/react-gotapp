import React from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleChar: true
        }
        this.toggleRandomChar = this.toggleRandomChar.bind(this);
    }

    componentDidMount() {
        const btn = document.querySelector('.btn-toggle');
        console.log('done');
        console.dir(btn.style);
    }

    toggleRandomChar() {
        this.setState({
            visibleChar: !this.state.visibleChar
        });

    }
    
    render() {
        const visibleChar = this.state.visibleChar ? <RandomChar/> : null;
        return(
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {visibleChar}
                            <button
                                className='btn-toggle' 
                                // color="info" 
                                onClick={this.toggleRandomChar}>Toggle random character
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
};
