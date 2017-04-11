import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getRecipe, deleteRecipe } from '../actions/';

class Recipe extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    
    componentWillMount(){
        this.props.getRecipe(this.props.params.id);
    }

    renderIngredients(){
        var count = 0;
        return this.props.activeRecipe.ingredients.map(
            (ingredient) => {
                count++;
                return (<li key={count} >{ingredient}</li>)
            }
        );
    }

    deleteRecipe(){
        this.props.deleteRecipe(this.props.params.id);
        this.context.router.push('/');
    }

    render(){
        return(
            <div>
                <Link to="/" className="btn btn-secondary">Back To Index</Link>
                <button className="btn btn-danger pull-right" onClick={this.deleteRecipe.bind(this)} >Delete</button>
                <Link to={`/recipes/${this.props.params.id}/edit`} className="btn btn-secondary pull-right">Edit</Link>
                <hr/>
                <h3>{this.props.activeRecipe.name}</h3>
                <ul>
                    {this.renderIngredients()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { activeRecipe: state.recipes.activeRecipe }
}

export default connect(mapStateToProps, { getRecipe, deleteRecipe } )(Recipe);