import React from 'react'

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.link}</td>
        </tr>
    )
}
const ProjectList = ({items}) => {
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>LINK</th>
            </tr>
            {items.map((item) => <ProjectItem item={item}/>)}
        </table>
    )
}
export default ProjectList