import http from '../http-service';
import {BaseUrl} from '../api-config';

export async function getTodos() {
    return await http.get(BaseUrl.todos);
}

export async function getTodoById(id) {
    return await http.get(`${BaseUrl.todos}${id}`)
}

export async function postTodo(newTodo) {
    return await http.post(BaseUrl.todos, newTodo)
}

export async function putTodo(editedTodo) {
    return await http.put(`${BaseUrl.todos}${editedTodo.id}`, editedTodo)
}

export async function deleteTodo(id) {
    return await http.delete(`${BaseUrl.todos}${id}`)
}