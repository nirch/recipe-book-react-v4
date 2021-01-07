import RecipeNavbr from "../../components/RecipeNavbar/RecipeNavbr";

function HomePage(props) {
    const {activeUser} = props;

    return (
        <div className="p-home">
            <RecipeNavbr activeUser={activeUser}/>
            Home Page
        </div>
    )

}

export default HomePage;