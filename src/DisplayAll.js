import React, { Component } from 'react';
import NewForm from './NewForm';
import Data from './Data';
import Box from './Box';
import './DisplayAll.css';

class DisplayAll extends Component {
    constructor(props){
        super(props)
        this.state = {
            recipes: [], 
            visible: true,
            exit: ' '
        }
        this.create = this.create.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }
    create(newRecipe){
        this.setState({
            recipes: [...this.state.recipes, newRecipe]
        })
    }
    handleClick(){
        this.setState({
            visible: !this.state.visible
        })
    }
    handleExit(){
        alert('child is exiting');
    }
    remove(id){
        this.setState({
            recipes: this.state.recipes.filter(t => t.id !== id)
        });
    }
    update(id, updatedRecipe){
        console.log(updatedRecipe)
        console.log(updatedRecipe.ingredients)
        console.log(updatedRecipe.image)
        console.log(updatedRecipe.name)
        console.log(updatedRecipe.instructions)
        const updatedRecipes = this.state.recipes.map(recipe => {
            if(recipe.id === id){
                // return { ...recipe, ingredients: updatedRecipe };
                return { ...recipe, ingredients: updatedRecipe.ingridents, image: updatedRecipe.image, name: updatedRecipe.name, instructions: updatedRecipe.instructions}
            }
            return recipe;
        })
        this.setState({recipes: updatedRecipes})
    }
    render() {
        const recipes = this.state.recipes.map((recipe, index) => {
            return (
                <div>
                    <Box key={recipe.id} updateRecipe={this.update} id={recipe.id} index={index} removeRecipe={this.remove} recipe={recipe.name} image={recipe.image} ingridents={recipe.ingredients} instructions={recipe.instructions} visible={true}/>
                    {/*<Recipe key={recipe.id} id={recipe.id} recipe={recipe.name} image={recipe.image} ingridents={recipe.ingredients} instructions={recipe.instructions} visible={true}/>*/}
                </div>
            )
        });
        return (
            <div className='container'>
                <div >
                    <h1 className='title'>Recipe App</h1>
                    {this.state.visible ? null : <NewForm toggle={this.handleClick} createRecipe={this.create}/>}
                    <button onClick={this.handleClick}>Add Recipe</button>

                    <div>
                        {recipes}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default DisplayAll