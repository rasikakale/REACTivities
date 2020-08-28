import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {spans: 0};

        // allows us to reach into DOM and interact with individual element
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //we are consoling logging these values before the image loads, so imageRef.current.clientHeight gives undefined or 0
        // too early to get height or any property from componentDidMount() 
            // console.log(this.imageRef);
            // console.log(this.imageRef.current.clientHieght);

        // passing callback to eventlistener so method in eventlistener has to be an arrow function
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // determines span value to separate and add spacing between images
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({spans});
    };

    render() {

        const {description, urls} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;