import { Container, Jumbotron } from "react-bootstrap";
import RecipeNavbr from "../../components/RecipeNavbar/RecipeNavbr";

function HomePage(props) {
    const {activeUser, onLogout} = props;

    return (
        <div className="p-home">
            <RecipeNavbr activeUser={activeUser} onLogout={onLogout}/>
            <Jumbotron>
                <Container>
                    <h1>Recipe Book</h1>
                    <p>Master your recipes</p>
                </Container>
            </Jumbotron>
        </div>
    )

}

export default HomePage;