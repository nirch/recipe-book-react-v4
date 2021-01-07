import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import RecipeNavbr from "../../components/RecipeNavbar/RecipeNavbr";

function RecipesPage(props) {
    const {activeUser, onLogout, recipes} = props;

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    console.log(recipes);
    const recipesView = recipes.map(recipe => <p key={recipe.id}>{recipe.name}</p>)

    return (
        <div className="p-recipes">
            <RecipeNavbr activeUser={activeUser} onLogout={onLogout}/>
            <Container>
                <h1>{activeUser.fname}'s Recipes</h1>
                {recipesView}
            </Container>
        </div>
    )

}

export default RecipesPage;