import React from 'react'

const ProjectItem = ({item}) => {

    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.user}</td>
            <td>{item.name}</td>
            <td>{item.link}</td>
        </tr>
    );
}
const ProjectList = ({items}) => {
    // console.log({items})
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USERS</th>
                    <th>Name</th>
                    <th>LINK</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => <ProjectItem item={item}/>)}
            </tbody>
        </table>
    )
}
export default ProjectList