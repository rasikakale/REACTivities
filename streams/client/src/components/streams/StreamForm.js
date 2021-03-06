import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        // return (
        //     <input onChange={formProps.input.onChange} value={formProps.input.value}/>
        // );

        // takes all input object and its properties, and add as props to <input> element 
        // return <input {...formProps.input} />;
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        // refactor of above
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
       
    }

    // takes in all values from form inside object
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }   
}

const validate = (formValues) => {
    const errors = {};

    // only run if the user did not enter a title
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};


export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

// combining regular dispatching in redux with Reduxform
/*
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);
*/

