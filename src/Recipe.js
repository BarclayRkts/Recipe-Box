import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            exit: false,
            isEditing: false,
            recipe: this.props.recipe,
            ingridents: this.props.ingridents,
            image: this.props.image,
            instructions: this.props.instructions
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleRemove(){
        this.props.removeRecipe(this.props.id)
    }
    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleUpdate(evt){
        evt.preventDefault();
        // this.props.updateRecipe(this.props.id, this.state.ingridents)
        this.props.updateRecipe(this.props.id, {
            name: this.state.recipe,
            ingridents: this.state.ingridents,
            image: this.state.image,
            instructions: this.state.instructions,
        });   
        this.setState({
            isEditing: false
        })
    }
    handleChange(evt){
        // console.log('changing')
        evt.preventDefault();
        this.setState({
            [evt.target.name] : evt.target.value
        })
        // console.log(`this in handle change : ${[evt.target.name]}`)
    }
    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>

                    <div className='inputContainer'>
                        <label>Recipe Name *</label>
                        <input  
                        value={this.state.recipe} 
                        name='recipe' 
                        className='inputBox name'
                        onChange={this.handleChange}/>
                        </div>

                        <div className='inputContainer'>
                        <label>Ingredients *</label>
                        <textarea
                        className='inputBox ingredients'
                        name='ingridents'
                        value={this.state.ingridents}
                        onChange={this.handleChange}
                        />
                        </div>

                        <div className='inputContainer'>
                        <label>Instructions *</label>
                        <textarea
                        className='inputBox instructions'
                        name='instructions'
                        value={this.state.instructions}
                        onChange={this.handleChange}
                        />
                        </div>

                        <div className='inputContainer'>
                        <label>Image URL (optional) *</label>
                        <input
                        className='inputBox imageURL'
                        name='image'
                        value={this.state.image}
                        onChange={this.handleChange}
                        />
                        </div>
                        
                        <button>Save</button>
                        
                    </form>
                </div>
            )
        }else{
            result = (
            <div className='containerBox'>
                <button className='exitBtn' onClick={this.props.onClose}>X</button>
                <h1 className='title'>{this.props.recipe}</h1>
                
                <div className='ingridentsBox'>
                    <h2>Ingridents</h2>
                    <pre>{this.props.ingridents}</pre>
                </div>

                <div className='imageBox'>
                    <img src={this.props.image} alt={this.props.recipe}/>
                </div>
                
                <div className='instructionsBox'>
                    <h2>Instructions</h2>
                    <pre>{this.props.instructions}</pre>
                </div>

                <button onClick={this.handleRemove}>Delete</button>
                {<button onClick={this.toggleForm}>Edit</button>}
                
            </div>
            )
        }
        return result;
        
    }
}
export default Recipe;