import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// get built in functionality from React.Component to the class App to use 
class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     // this is the only time we do direct assignment to this.state
    //     this.state = { lat: null, errorMessage: "" };
    // }
    //entire state initialization can just be this without constructor

    state = {lat: null, errorMessage: ""};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // success callback function
                // call setState to update state object or assign a property 
                // do NOT do this.state.lat = position.coords.latitude
            (position) => this.setState({lat: position.coords.latitude}),
                
            // error callback function
            (err) => this.setState({errorMessage: err.message})
            
        );
    }

    renderContent() {
        //this is conditional rendering
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request"/>;

    }

    // React says we have to define render!
    render() {
        return (
            <div className="border-red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);