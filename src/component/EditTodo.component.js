import React from 'react';

import Submit from './formInput/Submit.form.component';
import TextInput from './formInput/TextInput.form.component';
import RadioButtonMenu from './formInput/RadioButtonMenu.form.component';

import { Todo } from '../../src/util/Todo';
import Router from 'next/router'

export const FormFields = {
    description: 'todo_description',
    responsible: 'todo_responsible',
    priority: 'todo_priority',
    completed: 'todo_completed'
};

const priorityOptions =
    [
        { Id: "priorityLow", Value: "Low" },
        { Id: "priorityMedium", Value: "Medium" },
        { Id: "priorityHigh", Value: "High" }
    ];

class EditTodo extends React.Component {

    constructor(props) {
        super(props);
        console.log(`ID: ${priorityOptions[0].Id}`);

        this.state = {
            _id: '',
            [FormFields.description]: '',
            [FormFields.responsible]: '',
            [FormFields.priority]: '',
            [FormFields.completed]: false
        }

        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onFormModify = this.onFormModify.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    async componentDidMount() {
        console.log(this.props.todoID)

        let todoItem = await Todo.GetTodoById(this.props.todoID)

        console.log(todoItem)
        this.setState(
            todoItem
        );
    }

    onFormModify(e, field) {
        var newVal = e.target.value;
        this.setState({
            [field]: newVal
        });
    }

    onChangeCompleted() {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:\n
            Description: ${this.state.todo_description}\n
            Responsible: ${this.state.todo_responsible}\n
            Priority: ${this.state.todo_priority}\n
        `);

        const editTodo = {
            id: this.state._id,
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        Todo.EditTodo(editTodo);

        Router.push('/');
    }

    render() {
        return (
            <form className="container form-group" onSubmit={this.onSubmit}>
                <p>EditTodo for {this.props.s1}</p>
                <div>
                    <TextInput Label="Description: " Value={this.state.todo_description} OnChange={this.onFormModify} fieldName={FormFields["description"]} />
                    <TextInput Label="Responsible: " Value={this.state.todo_responsible} OnChange={this.onFormModify} fieldName={FormFields["responsible"]} />
                    <RadioButtonMenu Options={priorityOptions} CurrentOption={this.state.todo_priority} OnChange={this.onFormModify} fieldName={FormFields["priority"]} />
                </div>
                <Submit Value="Save Todo" />
            </form>

        );
    }
}

export default EditTodo;