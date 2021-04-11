import { React, Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Fragment>
                <h1>Home</h1>
            </Fragment>
        );
    }
}
export default withRouter(App);