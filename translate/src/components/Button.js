import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    // gets value out of createContext() object using this.context 
    // static contextType = LanguageContext;
    // render() {
    //     const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    //     return (
    //         <button className="ui button primary">{text}</button>
    //     );
    // }

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    // using Consumer to get data from object
    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }

}

export default Button;