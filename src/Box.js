import React, { Component } from 'react';
import './Box.css';
import Recipe from './Recipe';

export default class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            toggle: !this.state.toggle,
        });
    }
    render() {
        return (
            <div className='imgBox'>

                <img className='img' alt={this.props.name} src={this.props.image}/>

                <div className='boxName'>{this.props.recipe}</div>

                <button onClick={this.handleClick}>Open Recipe</button>

                {this.state.toggle ?
                    <Recipe key={this.props.id} onClose={this.handleClick} updateRecipe={this.props.updateRecipe} removeRecipe={this.props.removeRecipe} id={this.props.id} recipe={this.props.recipe} image={this.props.image} ingridents={this.props.ingridents} instructions={this.props.instructions}/>:
                    null
                }
            </div>
        )
    }
}
