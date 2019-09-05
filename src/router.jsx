import React from 'react'
import {Redirect, Route, Switch} from 'react-router'
import TodoList from './todos/components/todo-list'
import TodoDetail from './todos/components/todo-detail'

const Router = () => (
    <Switch>
        <Route path="/todo-list" component={TodoList} />
        <Route path="/todo-detail" component={TodoDetail} />
        <Redirect from="/" exact to="/todo-list" />
    </Switch>
)
export default Router;

