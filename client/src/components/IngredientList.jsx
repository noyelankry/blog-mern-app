import { useState } from 'react'
import Ingredient from './Ingredient'
import { ImPlus } from 'react-icons/im'

const IngredientList = ({ ingredientsData, setIngredientsData }) => {
    const [ingredients, setIngredients] = useState([]);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { name: '', servingSize: '', servings: 0 }])
        setIngredientsData([...ingredientsData, {
            ingredient: {
                name: '', servingSize: '', servings: 0
            }
        }])
    }

    const handleRemoveIngredient = (index) => {
        const updatedIngredients = ingredients.filter((_, i) => i !== index)
        setIngredients(updatedIngredients)
        const updatedIngredientsData = ingredientsData.filter((_, i) => i !== index)
        setIngredientsData(updatedIngredientsData)
    }

    const handleIngredientChange = (index, field, newValue) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index][field] = newValue;
        setIngredients(updatedIngredients);

        const updatedIngredientsData = [...ingredientsData];
        updatedIngredientsData[index][field] = newValue;
        setIngredientsData(updatedIngredientsData);
    }

    return (
        <div className='p-0 bg-slate-300 rounded-lg mb-3'>
            <p className='font-bold p-3 text-[19px] inline'>INGREDIENTS </p>
            <button className='inline py-4' onClick={handleAddIngredient}><ImPlus /></button>
            {ingredients.map((ingredient, index) => (
                <Ingredient
                    key={index}
                    value={ingredient}
                    name={ingredient.name}
                    servingSize={ingredient.servingSize}
                    servings={ingredient.servings}
                    onIngredientChange={(field, value) => handleIngredientChange(index, field, value)}
                    onRemove={() => handleRemoveIngredient(index)}
                />
            ))}
        </div>
    )
}

export default IngredientList