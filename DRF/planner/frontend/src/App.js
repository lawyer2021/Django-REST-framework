import React, { Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'
import {Header} from "./components/layout/Header";
import {Footer} from "./components/layout/Footer";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    // componentDidMount() {
    //     const users = [
    //         {
    //             // 'id' : ,
    //             'username' : 'feddot',
    //             'firstname': 'Фёдор',
    //             'lastname': 'Достоевский',
    //             'email': 'fedor@mail.ru'
    //         },
    //         {
    //             // 'id' : ,
    //             'username': 'agreen',
    //             'firstname': 'Александр',
    //             'lastname': 'Грин',
    //             'email': 'alex@mail.ru'
    //         },
    //     ]
    //     this.setState({'users': users})
    // }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
    }


    render() {
        return (
            <div>
                <Header />
                <UserList users={this.state.users}/>
                <Footer />
            </div>
        )
    }
}

export default App;