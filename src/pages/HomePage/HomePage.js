import RecipeNavbr from "../../components/RecipeNavbar/RecipeNavbr";

function HomePage(props) {
    const {activeUser, onLogout} = props;

    return (
        <div className="p-home">
            <RecipeNavbr activeUser={activeUser} onLogout={onLogout}/>
            Home Page
        </div>
    )

}

export default HomePage;