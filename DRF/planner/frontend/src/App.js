import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'
import ProjectList from "./components/Project.js";
import TodoList from "./components/Todo.js";
import {HashRouter, Route, Link, Switch, Redirect, BrowserRouter} from "react-router-dom";
import {getCLS} from "web-vitals";
import UserProjectList from "./components/UserProject";
import project from "./components/Project.js";
import todo from "./components/Todo.js";
import {Header} from "./components/layout/Header";
import {Footer} from "./components/layout/Footer";

const NotFound404 = ({ location }) => {
    return (
        <div>
            <h1>
                Страница по адресу '{ location.pathname }' не найдена!
            </h1>
        </div>
    )
}


// Вариант 1: РАБОТАЕТ: (РУЧНОЙ ВВОД ДАННЫХ в componentDidMount)

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             'users': [],
//             'projects': [],
//             'todo': [],
//         }
//     }
    //
    // componentDidMount() {
    //     const users = [
    //         {
    //             'id' : 1,
    //             'username' : 'boss',
    //             'firstname': 'Anatoliy',
    //             'lastname': 'Koni',
    //             'email': 'kon@yandex.ru'
    //         },
    //         {
    //             'id' : 2,
    //             'username': 'chief',
    //             'firstname': 'Genry',
    //             'lastname': 'Padva',
    //             'email': 'padva@gmail.com'
    //         },
    //         {
    //             'id' : 3,
    //             'username': 'lawyer',
    //             'firstname': 'Fedor',
    //             'lastname': 'Plevako',
    //             'email': 'plevako@mail.ru'
    //         },
    //     ]
    //     const projects = [
    //         {
    //             'id' : 1,
    //             'name' : 'Case N 25-5359/2023 (LLC "GeekBrains")',
    //             'link': 'archive/25-5359'
    //         },
    //         {
    //             'id' : 2,
    //             'name': 'Case N 64-300/2022 (LLC "MAIL")',
    //             'link': 'archive/64-300'
    //         },
    //         {
    //             'id' : 3,
    //             'name': 'Case N 40-395/2022 (LLC "SkillBox")',
    //             'link': 'archive/40-395'
    //         },
    //     ]
    //     const todo = [
    //         {
    //             'id' : 1,
    //             'text' : '1. Prepare a statement of claim',
    //             'date_created': '05.11.2022',
    //             'date_updated': '14.01.2023',
    //             'is_active': 'True',
    //             'project_id': 1,
    //             'user_id': 1,
    //         },
    //                     {
    //             'id' : 2,
    //             'text' : '1. Attend the court session 2. Send notifications to the parties of the process',
    //             'date_created': '14.11.2022',
    //             'date_updated': '14.12.2022',
    //             'is_active': 'True',
    //             'project_id': 2,
    //             'user_id': 2,
    //         }
    //     ]
    //     this.setState({'users': users, 'projects': projects, 'todo': todo})
    // }



// Вариант № 2: РАБОТАЕТ (РУЧНОЕ СОЗДАНИЕ ОБЪЕКТОВ):

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



// Вариант № 3: НЕ РАБОТАЕТ (ЗАПРОС С СЕРВЕРА ПО API ДАННЫХ ИЗ ВСЕХ ТАБЛИЦ - USERS, PROJECTS, TODO):
// При этом запрос проходит нормально и в лог выводятся объекты со всеми свойствами из базы данных, но на локалхосте
// рендерятся только заголовки из фалов user.js, project.js, todo.js.
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todo': [],
        }
    }
   componentDidMount() {
        Promise.all([
        axios.get('http://127.0.0.1:8000/api/users'),
        axios.get('http://127.0.0.1:8000/api/project'),
        axios.get('http://127.0.0.1:8000/api/todo'),
        ]).then(([users, project, todo]) => {
            const user_from_api = users.data
            const project_from_api = project.data
            const todo_from_api = todo.data
            console.log(user_from_api, project_from_api, todo_from_api)
            this.setState(
                {
                    'users': user_from_api,
                    'project': project_from_api,
                    'todo': todo_from_api
                }
            )
        }).catch(error => console.log(error))
    }

    // РОУТИНГ РАБОТАЕТ КОРРЕКТНО ПРИ ИСПОЛЬЗОВАНИИ ВАРИАНТОВ 1 И 2:

    render() {
        return (
            <div className='App'>
                <Header />
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Users</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/todo'>Notes</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={() => <UserList items={this.state.users}/>} />
                        <Route exact path='/projects' component={() => <ProjectList items={this.state.projects}/>} />
                        <Route exact path='/todo' component={() => <TodoList items={this.state.todo}/>} />
                        <Route exact path='/user/:id' component={() => <UserProjectList items={this.state.projects}/>} />
                        <Redirect from='/users' to='/'/>
                        <Route component={NotFound404}/>
                    </Switch>
                </BrowserRouter>
                {/*<UserList items={this.state.users}/>*/}
                {/*<ProjectList items={this.state.projects}/>*/}
                <Footer />
            </div>
        )
    }
}
export default App;