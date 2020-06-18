import React,{Component} from "react"

class InputTodo extends Component{
    state = {
        title: ""
    }
    //saisie l'élément dans le champs input le name doit correspondre à la state.title
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }
    //apres soumission envoie les données
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title)

        //vide l'état
        this.setState({title:""})
    }
    render() {
        return ( 
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" name="title" className="input-text" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange}/>
                <input type="submit" className="input-submit" value="Submit"/>
            </form>
        )
    }
}
export default InputTodo