import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import {v4 as uuidv4} from "uuid"
class TodoContainer extends React.Component{
    state = {
        todos : [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    }
    //coche les éléments et change l'etat true/false en fonction du clic
    handleChange = (id) => {
        this.setState(
            {todos : this.state.todos.map(todo => {
                    if(todo.id === id){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        );

    }
    //supprime l'élément cliqué en fonction de l'id qui aura été filtré, renvoit les éléments dont id ne correspond pas 
    delTodo = (id) => {
        this.setState(
            {
                todos : [...this.state.todos.filter(
                    todo => {
                        return todo.id !== id;
                    }
                )]
            }
        );
    }
    //ajoute un élément sur le front
    addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    render(){
        return (
            // <React.Fragment className="container">
            <div className="container">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem}/>
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo}/>
            </div>
            // </React.Fragment>
        )
    }
}
export default TodoContainer