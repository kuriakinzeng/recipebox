import React, { Component, PropTypes } from 'react';
import { updateRecipe } from '../actions/index';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';

class RecipeEdit extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    submitForm(recipe){
        this.props.updateRecipe({
            id: this.props.activeRecipe.id, 
            name: recipe.name, 
            ingredients: recipe.ingredients.split(',')
        });
        this.context.router.push(`/recipes/${this.props.activeRecipe.id}`);
    }

    render() {
        return (
            <RecipeForm initialValues={this.props.activeRecipe} onSubmit={this.submitForm.bind(this)}/>
        )
    }
}

function mapStateToProps(state) { 
    return {activeRecipe: state.recipes.activeRecipe};
};

export default connect(mapStateToProps, { updateRecipe })(RecipeEdit);