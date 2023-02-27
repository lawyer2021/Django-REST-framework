import React from 'react'
import {Link} from "react-router-dom";


const TodoItem = ({item, deleteTodo}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.text}</td>
            <td>{item.date_created}</td>
            <td>{item.date_updated}</td>
            <td>{item.is_active}</td>
            <td>{item.project_id}</td>
            <td>{item.user_id}</td>
            <td><button onClick={()=> deleteTodo(item.id)} type='button'>Delete</button></td>
        </tr>
    );
};
const TodoList = ({items, deleteTodo}) => {
    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TEXT</th>
                    <th>DATE CREATED</th>
                    <th>DATE UPDATED</th>
                    <th>ACTIVE</th>
                    <th>PROJECT ID</th>
                    <th>USER ID</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => <TodoItem item={item}/>)}
                {items.map((item) => <TodoItem item={item} deleteProject={deleteTodo}/> )}
            </tbody>
        </table>
        <Link to='/todo/create'>Create</Link>
        </div>
    );
}
export default TodoList;