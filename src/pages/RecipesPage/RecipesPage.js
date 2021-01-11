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
    const {activeUser, onLogout} = props;
    const [showModal, setShowModal] = useState(false);
    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const ParseRecipe = Parse.Object.extend('Recipe');
            const query = new Parse.Query(ParseRecipe);
            query.equalTo("userId", Parse.User.current());
            const parseRecipes = await query.find();
            setRecipes(parseRecipes.map(parseRecipe => new RecipeModel(parseRecipe)));
        }

        if (activeUser) {
            fetchData()
        }
    }, [activeUser])

    function addRecipe(name, desc, img) {
        const ParseRecipe = Parse.Object.extend('Recipe');
        const newRecipe = new ParseRecipe();
        
        newRecipe.set('name', name);
        newRecipe.set('desc', desc);
        newRecipe.set('img', new Parse.File(img.name, img));
        newRecipe.set('userId', Parse.User.current());
        
        newRecipe.save().then(parseRecipe => {
            setRecipes(recipes.concat(new RecipeModel(parseRecipe)));
        }, error => {
            console.error('Error while creating Recipe: ', error);
        });   
    }

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