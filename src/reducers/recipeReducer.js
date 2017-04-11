import {
    GET_RECIPES, GET_RECIPE,
    POST_RECIPE, DELETE_RECIPE, UPDATE_RECIPE
} from '../actions/';

//mock recipes
let recipes = [
    {
        id: 0,
        name: 'Omelette',
        ingredients: [
            '3 Eggs', '1/3 cup Grated chedder cheese', 'half cup of spinach', '1/4 cup of diced onions'
        ]
    },
    {
        id: 1,
        name: 'Chicken Quesadilla',
        ingredients: [
            '2 tortillas',
            '1/4c chedderjack cheese',
            '1/4c diced tomatoes',
            '1/4c diced chicken breast (cooked)',
            '1tbsp butter'
        ],
    }
];

const INITIAL_STATE = { all: recipes, activeRecipe: recipes[0] }

export default function (state = INITIAL_STATE, action) {
    let newState = {};
    switch (action.type) {
        case GET_RECIPES:
            newState = { ...state };
            return newState;
        case GET_RECIPE:
            var recipeFound = state.all.filter((recipe) => {
                return recipe.id === parseInt(action.recipeId,10)
            });
            newState['activeRecipe'] = (recipeFound.length>0)? recipeFound[0] : null;
            return Object.assign({}, state, newState);
        case POST_RECIPE:
            newState['all'] = state.all.concat(action.recipe);
            return Object.assign({}, state, newState);
        case DELETE_RECIPE:
            newState['all'] = state.all.filter((recipe) => {
                return recipe.id !== parseInt(action.recipeId,10)
            });
            return Object.assign({}, state, newState);
        case UPDATE_RECIPE:
            newState['all'] = state.all.filter((recipe) => {
                return recipe.id !== parseInt(action.recipe.id,10)
            });
            newState['all'] = newState['all'].concat(action.recipe);
            return Object.assign({}, state, newState);
        default:
            return state;
    }
}