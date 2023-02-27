import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: '', user: props.users[0]?.id}
        // this.state = {text: '', user: ''}
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.text]: event.target.value
            }
        );
    }

    handleSubmit(event) {
        this.props.createTodo(this.state.text, this.state.user)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit()}>
                <div className='form-group'>
                    <label for='text'>text</label>
                    <input type='text' className='form-control' name='text' value={this.state.text} onChange={(event)=>this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="user">user</label>
                    {/*<input type='text' className='form-control' name='user' value={this.state.user} onChange={(event)=>this.handleChange(event)} />*/}
                    <select name='user' className='form-control' onChange={(event)=>this.handleChange(event)}>{this.props.users.map((item)=><option value={item.id}>{item.text}</option> )}</select>
                </div>
                <input type='submit' className="btn btn-primary" value="Save"/>
            </form>
        );
    }
}

export default TodoForm