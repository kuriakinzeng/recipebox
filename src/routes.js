import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import RecipeNew from './components/RecipeNew';
import RecipeEdit from './components/RecipeEdit';

export default (
    <div>
        <Route path="/" component={App} >
            <IndexRoute component={RecipeList} />
            <Route path="/recipes/new" component={RecipeNew} />
            <Route path="/recipes/:id" component={Recipe} />
            <Route path="/recipes/:id/edit" component={RecipeEdit} />
        </Route>
    </div>
);