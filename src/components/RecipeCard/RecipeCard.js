

function RecipeCard(props) {
    const {recipe} = props;
    return (
        <div>
            {recipe.name}
        </div>
    );
}

export default RecipeCard;