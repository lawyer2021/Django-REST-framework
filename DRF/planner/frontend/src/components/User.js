import React from 'react'
import {Link} from "react-router-dom";

const UserItem = ({item}) => {
    return (
        <tr>
           {/*<td>*/}
            {/*    <Link to = {'user/${user.id}'}>{user.id}</Link>*/}
            {/*</td>*/}
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
        </tr>
    )
}
const UserList = ({items}) => {
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>USERNAME</th>
                <th>FIRSTNAME</th>
                <th>LASTNAME</th>
                <th>EMAIL</th>
            </tr>
            {items.map((item) => <UserItem item={item} />)}
        </table>
    )
}
export default UserList