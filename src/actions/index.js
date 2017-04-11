export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE = 'GET_RECIPE';
export const POST_RECIPE = 'POST_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';

export function getRecipes() {
    return {
        type: GET_RECIPES
    }
}

export function getRecipe(recipeId){
    return {
        type: GET_RECIPE,
        recipeId
    }
}

export function postRecipe(recipe){
    return {
        type: POST_RECIPE,
        recipe
    }
}

export function deleteRecipe(recipeId){
    return {
        type: DELETE_RECIPE,
        recipeId
    }
}

export function updateRecipe(recipe){
    return {
        type: UPDATE_RECIPE,
        recipe
    }
}