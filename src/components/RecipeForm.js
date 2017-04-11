import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';

class RecipeForm extends Component {
    renderField(field) {
        const { input, placeholder, label, meta: { touched, error } } = field;
        return (
            <div className="form-group">
                <label htmlFor={input.name}>{label}</label>
                <input placeholder={placeholder} className="form-control" {...input} />
                {touched && error && <div className="error">{error}</div>}
            </div>
        )
    }

    renderTextarea(textarea) {
        const { input, placeholder, label, meta: { touched, error } } = textarea;
        return (
            <div className="form-group">
                <label htmlFor={input.name}>{label}</label>
                <textarea placeholder={placeholder} className="form-control" {...input} />
                {touched && error && <div className="error">{error}</div>}
            </div>
        )
    }

    render() {
        const { handleSubmit, submitting, pristine, reset, initialValues } = this.props;
        return (
            <div>
                <Link to="/">Cancel</Link>
                <hr/>
                <h3>{initialValues?"Edit Recipe":"New Recipe"}</h3>
                <form onSubmit={handleSubmit}>
                    <Field name="name" type="text" component={this.renderField} label="Recipe Name" placeholder="Enter name"/>
                    <Field name="ingredients" component={this.renderTextarea} label="Ingredients" placeholder="Enter ingredients separated by comma"/>
                    <button className="btn btn-primary" disabled={submitting} type="submit">Submit</button>
                    <button className="btn btn-link" type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    if (!values.name)
        errors.name = 'Enter a recipe name'
    if (!values.ingredients)
        errors.ingredients = 'Enter ingredients separated by commas'
    return errors;
}

export default reduxForm({
    form: 'RecipeForm',
    validate
})(RecipeForm);

// RecipeForm;

// function mapStateToProps(state) { 
//     return {recipes: state.recipes.all};
// };

// export default connect(mapStateToProps, { postRecipe })(RecipeNewForm);

/* 
Need to pass:
- this.props.onSubmit 
- this.props.form (name)
*/