import { Col, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeNavbr from "../../components/RecipeNavbar/RecipeNavbr";

function RecipesPage(props) {
    const {activeUser, onLogout, recipes} = props;

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    console.log(recipes);
    const recipesView = recipes.map(recipe => <Col key={recipe.id} lg={3} md={6}><RecipeCard recipe={recipe}/></Col>)

    return (
        <div className="p-recipes">
            <RecipeNavbr activeUser={activeUser} onLogout={onLogout}/>
            <Container>
                <h1>{activeUser.fname}'s Recipes</h1>
                <Row>
                    {recipesView}
                </Row>
            </Container>
        </div>
    )

}

export default RecipesPage;