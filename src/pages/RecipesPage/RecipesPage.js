import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import NewRecipeModal from "../../components/NewRecipeModal/NewRecipeModal";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeNavbr from "../../components/RecipeNavbar/RecipeNavbr";
import './RecipesPage.css'
import Parse from 'parse';
import RecipeModel from "../../model/RecipeModel";

function RecipesPage(props) {
    const {activeUser, onLogout, addRecipe} = props;
    const [showModal, setShowModal] = useState(false);
    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {

        if (activeUser) {
            const ParseRecipe = Parse.Object.extend('Recipe');
            const query = new Parse.Query(ParseRecipe);
            query.equalTo("userId", Parse.User.current());
            query.find().then(parseRecipes => {
              setRecipes(parseRecipes.map(parseRecipe => new RecipeModel(parseRecipe)));
            }, error => {
              console.error('Error while fetching Recipe', error);
            });    
        }

    }, [activeUser])

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    const recipesView = recipes.map(recipe => <Col key={recipe.id} lg={3} md={6}><RecipeCard recipe={recipe}/></Col>)

    return (
        <div className="p-recipes">
            <RecipeNavbr activeUser={activeUser} onLogout={onLogout}/>
            <Container>
                <div className="heading">
                    <h1>{activeUser.fname}'s Recipes</h1>
                    <Button variant="link" onClick={() => setShowModal(true)}>New Recipe</Button>
                </div>
                <Row>
                    {recipesView}
                </Row>
            </Container>
            <NewRecipeModal show={showModal} handleClose={() => setShowModal(false)} addRecipe={addRecipe}/>
        </div>
    )

}

export default RecipesPage;