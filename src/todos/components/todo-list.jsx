import React, { useEffect, useContext} from 'react';
import {todoContext} from '../todo-context'
import { useObserver } from 'mobx-react-lite';
import { Link } from "react-router-dom";

export default function TodoList() {
    const todoStore = useContext(todoContext)
    useEffect( () => {
        onLoadTodos();
    },[]);
    const onLoadTodos = async () => {
       await todoStore.getTodos();
    }
    return useObserver(() => <>
        {todoStore.todos.map(t => <ul>
            <li key={t.id}>{t.title}</li>
        </ul>)}
        <Link  to={`/todo-detail`}><button >Go to detail</button></Link>
    </>)
}