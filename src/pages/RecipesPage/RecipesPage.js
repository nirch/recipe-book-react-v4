import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import RecipeNavbr from "../../components/RecipeNavbar/RecipeNavbr";

function RecipesPage(props) {
    const {activeUser, onLogout} = props;

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-recipes">
            <RecipeNavbr activeUser={activeUser} onLogout={onLogout}/>
            <Container>
                <h1>{activeUser.fname}'s Recipes</h1>
            </Container>
        </div>
    )

}

export default RecipesPage;