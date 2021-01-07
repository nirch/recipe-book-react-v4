import RecipeNavbr from "../../components/RecipeNavbar/RecipeNavbr";

function RecipesPage(props) {
    const {activeUser} = props;

    return (
        <div className="p-recipes">
            <RecipeNavbr activeUser={activeUser}/>
            Recipes Page
        </div>
    )

}

export default RecipesPage;