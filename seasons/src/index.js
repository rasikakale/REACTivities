import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

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
                // call setState to update state object
                // do NOT do this.state.lat = position.coords.latitude
            (position) => this.setState({lat: position.coords.latitude}),
                
            // error callback function
            (err) => this.setState({errorMessage: err.message})
            
        );
    }

    // React says we have to define render!
    render() {
        //this is conditional rendering
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
);