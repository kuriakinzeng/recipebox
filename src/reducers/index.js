import { combineReducers } from 'redux';
import recipes from './recipeReducer.js';
import { reducer as formReducer } from 'redux-form';

// you can import "default export"" by omitting the curly braces
export default combineReducers({
    form: formReducer,
    recipes,
});