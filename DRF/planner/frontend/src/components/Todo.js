import React from 'react'

const TodoItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.id}
            </td>
            <td>
                {item.text}
            </td>
            <td>
                {item.date_created}
            </td>
            <td>
                {item.date_updated}
            </td>
            <td>
                {item.is_active}
            </td>
            <td>
                {item.project_id}
            </td>
            <td>
                {item.user_id}
            </td></tr>
    )
}

const TodoList = ({items}) => {
    return (
        <table>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    TEXT
                </th>
                <th>
                    DATE CREATED
                </th>
                <th>
                    DATE UPDATED
                </th>
                <th>
                    ACTIVE
                </th>
                <th>
                    PROJECT ID
                </th>
                <th>
                    USER ID
                </th>
            </tr>
            {items.map((item) => <TodoItem item={item} />)}
        </table>
    )
}
export default TodoList