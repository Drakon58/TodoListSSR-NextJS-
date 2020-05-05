import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };

        this.removeTodo = this.removeTodo.bind(this);
    }

    async componentDidMount() {
        var todoList = this.props.GetTodo();
        this.setState({
            todos: await this.props.GetTodo()
        });
        console.log(todoList)
    }

    removeTodo(e, id) {
        this.props.RemoveTodo(id);
        let todoArray = this.state.todos.filter(x => x._id !== id);
        this.setState({
            todos: todoArray
        });
    }

    render() {
        return (
            <div className="container">
                <p>TodoList Display</p>
                {
                    this.state.todos ?
                        this.state.todos.map((todoItem) => {
                            return <React.Fragment key={todoItem._id}>
                                <table className="table table-striped table-dark">
                                    <thead>
                                        <tr className="d-flex">
                                            <th className="col-2 text-left text-wrap text-break text-decoration-none">
                                                <Link href="/edit/[s1]" as={`/edit/${todoItem._id}`}>
                                                    <a>{todoItem.todo_description}</a>
                                                </Link>
                                            </th>
                                            <th className="col-10 text-right">
                                                <button className="btn btn-primary btn-dark"><FontAwesomeIcon onClick={e => this.removeTodo(e, todoItem._id)} aria-hidden="true" icon={faMinusSquare}>Remove</FontAwesomeIcon></button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="d-flex">
                                            <td className="col-2">Assignee: </td><td className="text-left col-10">{todoItem.todo_responsible}</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <td className="col-2">Priority: </td><td className="text-left col-10">{todoItem.todo_priority}</td>
                                        </tr>
                                        <tr className="d-flex">
                                            <td className="col-2">Completed: </td><td className="text-left col-10">{String(todoItem.todo_completed)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                            </React.Fragment>
                        }
                        ) : <div className="warning">"Nothing to display"</div>
                }
            </div>
        );
    }
}