import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewForm.css';


class NewForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            ingredients: '',
            instructions: '',
            image: '',
            visible: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        // console.log('changing')
        evt.preventDefault();
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        // alert('submit');
        this.props.createRecipe({...this.state, id: uuidv4()});
        this.props.toggle();
        this.setState({
            name: '',
            ingredients: '',
            instructions: '',
            image: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button className='toggleBtn' onClick={this.props.toggle} type='button'>X</button>
                    
                    <h3>Add Recipe</h3>

                    <div className='inputContainer'>
                        <label>Recipe Name *</label>
                        <input
                        className='inputBox name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    </div>

                    <div className='inputContainer'>
                        <label>Ingredients *</label>
                        <textarea
                        className='inputBox ingredients'
                        name='ingredients'
                        value={this.state.ingredients}
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

                    <button>Add Recipe</button>
                </form>
            </div>
        )
    }
}

export default NewForm;