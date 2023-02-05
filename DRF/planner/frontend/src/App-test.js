// const NotFound404 = ({ location }) => {
//     return (
//         <div>
//             <h1>
//                 Страница по адресу '{ location.pathname }' не найдена!
//             </h1>
//         </div>
//     )
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         const user1 = {id: 1, username: 'Грин', firstname: 'dsafas', lastname: 'fsdfasd', email: 'fdsaf'}
//         const user2 = {id: 2, username: 'Пушкин', firstname: 'dasda', lastname: 'fsddasDAfasd', email: 'vsvsfd'}
//         const users = [user1, user2]
//         const project1 = {id: 1, name: 'Алые паруса', link: 'nfsdnjf'}
//         const project2 = {id: 2, name: 'Золотая цепь', link: 'nfsdnjf'}
//         const project3 = {id: 3, name: 'Пиковая дама', link: 'nfsdnjf'}
//         const project4 = {id: 4, name: 'Руслан и Людмила', link: 'nfsdnjf'}
//         const projects = [project1, project2, project3, project4]
//         this.state = {
//             'users': users,
//             'projects': projects
//         }
// }

// import React from "@types/react";
//
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             'users': []
//             // 'projects': [],
//             // 'todo': [],
//         }
    // }

        // РАБОТАЕТ:
    // componentDidMount() {
    //     const users = [
    //         {
    //             'id' : 1,
    //             'username' : 'feddot',
    //             'firstname': 'Фёдор',
    //             'lastname': 'Достоевский',
    //             'email': 'fedor@mail.ru'
    //         },
    //         {
    //             'id' : 2,
    //             'username': 'agreen',
    //             'firstname': 'Александр',
    //             'lastname': 'Грин',
    //             'email': 'alex@mail.ru'
    //         },
    //     ]
    //     this.setState({'users': users})
    // }

   // componentDidMount() {
    //     Promise.all([
    //     axios.get('http://127.0.0.1:8000/api/users'),
    //     // axios.get('http://127.0.0.1:8000/api/project'),
    //     // axios.get('http://127.0.0.1:8000/api/todo'),
    //     ]).then(([users, project, todo]) => {
    //         const user_from_api = users.data
    //         // const project_from_api = project.data
    //         // const todo_from_api = todo.data
    //         this.setState(
    //             {
    //                 'users': user_from_api,
    //                 // 'project': project_from_api,
    //                 // 'todo': todo_from_api
    //             }
    //         )
    //     }).catch(error => console.log(error))
    // }


    // render() {
    //     return (
    //         <div className='App'>
    //             {/*<Header />*/}
    //             {/*<HashRouter>*/}
    //             {/*    <nav>*/}
    //             {/*        <ul>*/}
    //             {/*            <li>*/}
    //             {/*                <Link to='/'>Users</Link>*/}
    //             {/*            </li>*/}
    //             {/*            <li>*/}
    //             {/*                <Link to='/projects'>Projects</Link>*/}
    //             {/*            </li>*/}
    //             {/*            /!*<li>*!/*/}
    //             {/*            /!*    <Link to='/todo'>Notes</Link>*!/*/}
    //             {/*            /!*</li>*!/*/}
    //             {/*        </ul>*/}
    //             {/*    </nav>*/}
    //             {/*    <Switch>*/}
    //             {/*        <Route exact path='/' component={() => <UserList users={this.state.users}/>} />*/}
    //             {/*        <Route exact path='/projects' component={() => <ProjectList items={this.state.projects}/>} />*/}
    //             {/*        /!*<Route exact path='/todo' component={() => <TodoList items={this.state.todo}/>} />*!/*/}
    //             {/*        <Route exact path='/user/:id' component={() => <UserProjectList items={this.state.projects}/>} />*/}
    //             {/*        <Redirect from='/users' to='/'/>*/}
    //             {/*        <Route component={NotFound404}/>*/}
    //             {/*    </Switch>*/}
    //             {/*</HashRouter>*/}
    //             // <UserList users={this.state.users}/>
    //             {/*<ProjectList items={this.state.projects}/>*/}
    //             {/*<Footer />*/}
//             </div>
//         )
//     }
// }