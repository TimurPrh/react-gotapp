import React from 'react';
import './app.css';
import {Container} from 'reactstrap';
import Header from '../header';
import {InitPage, CharacterPage, HousePage, BookPage, BookItem} from '../pages'
import {BrowserRouter as Router, Route, useLocation, Link} from 'react-router-dom';
import { Switch } from 'react-router';

export default class App extends React.Component {    
    render() {
        return(
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Switch>
                            <Route path='/' component={InitPage} exact/>
                            <Route path='/characters/' component={CharacterPage}/>
                            <Route path='/houses/' component={HousePage}/>
                            <Route path='/books/' component={BookPage} exact/>
                            <Route path='/books/:id' render={
                                ({match}) => {
                                    const {id} = match.params;
                                    return <BookItem bookId={id} />
                                }
                            } />
                            {/* <Route path='/books/:id' component={withRouter((props) => {
                                const {id} = props.match.params;
                                return(
                                    <BookItem bookId={id} />
                                )
                            })} /> */}
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </Container>
                </div>
            </Router>
        )
    }
};

function NotFound() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for "{location.pathname}"
        </h3>
        <Link id='redir' to='/'>Go to Main</Link>
      </div>
    );
}
