import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getRecipes } from '../actions/';

class RecipeList extends Component {
    componentWillMount(){
        this.props.getRecipes();
    }

    renderRecipes() {
        return this.props.recipes.map((recipe) => {
            return (
                <li key={recipe.id}>
                    <Link to={"recipes/" + recipe.id}>
                        {recipe.name}
                    </Link>
                </li>
            )
        })
    }

    render(){
        // console.log(this.props.recipes);
        return (
            <div>
            <Link to="/recipes/new" className="btn btn-primary">Create New Recipe</Link>
            <hr/>
            <h3>Recipes</h3>
            <ul>{this.renderRecipes()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { recipes: state.recipes.all };
}

export default connect(mapStateToProps, { getRecipes } )(RecipeList);