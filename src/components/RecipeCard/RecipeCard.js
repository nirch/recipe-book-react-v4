import { Card } from "react-bootstrap";
import './RecipeCard.css'


function RecipeCard(props) {
    const { recipe, position } = props;

    const myStyle = {animationDelay: position + 's'};
    return (
        <div className="c-recipe-card animate-falldown" style={myStyle}>
            <Card>
                <Card.Img variant="top" src={recipe.img} />
                <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>{recipe.desc}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default RecipeCard;