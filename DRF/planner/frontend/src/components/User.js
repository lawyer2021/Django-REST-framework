import React from 'react'
import {Link} from "react-router-dom";

const UserItem = ({user}) => {
    return (
        <tr>
            {/*<td>*/}
            {/*    <Link to = {'user/${user.id}'}>{user.id}</Link>*/}
            {/*</td>*/}
            <td>
                {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.firstname}
            </td>
            <td>
                {user.lastname}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>USERNAME</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>E-MAIL</th>
            </tr>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}
export default UserList