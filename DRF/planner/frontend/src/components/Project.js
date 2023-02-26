import React from 'react'
import {Link} from 'react-router-dom'

const ProjectItem = ({item, deleteProject}) => {
    console.log(item)
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.link}</td>
            <td>{item.name}</td>
            {/*Нужно вывести несколько значений: */}
            {/*<td>{item.user[0].username}</td>*/}
            <td><button onClick={()=> deleteProject(item.id)} type='button'>Delete</button></td>
        </tr>
    );
}
const ProjectList = ({items, deleteProject}) => {
    console.log({items})
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>LINK</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => <ProjectItem item={item} deleteProject={deleteProject}/> )}
            </tbody>
        </table>
    )
}
export default ProjectList