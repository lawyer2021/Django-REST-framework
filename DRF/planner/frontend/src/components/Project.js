import React from 'react'

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.link}</td>
            <td>{item.name}</td>
            {/*Нужно вывести несколько значений: */}
            <td>{item.user[0].username}</td>
        </tr>
    );
}
const ProjectList = ({items}) => {
    console.log({items})
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>LINK</th>
                    <th>Name</th>
                    <th>USERS</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => <ProjectItem item={item}/>)}
            </tbody>
        </table>
    )
}
export default ProjectList