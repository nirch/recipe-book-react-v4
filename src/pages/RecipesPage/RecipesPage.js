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
            Recipes Page
        </div>
    )

}

export default RecipesPage;