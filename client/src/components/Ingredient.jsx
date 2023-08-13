import { ImMinus } from 'react-icons/im'

const Ingredient = ({ value, name, servingSize, servings, onIngredientChange, onRemove }) => {

    const servingSizeOptions = [
        "grams",
        "kilograms",
        "teaspoons",
        "tablespoons",
        "cups"
    ]

    return (
        <div className='p-0 bg-slate-300 rounded-lg flex flex-row mb-3 justify-evenly '>
            <input
                type="number"
                className='p-3 rounded-lg bg-slate-400 w-[25%] placeholder-black ml-3'
                placeholder='Number of servings'
                value={servings}
                onChange={event => {
                    onIngredientChange('servings', event.target.value)
                }} />
            <select
                type="text"
                className='p-3 rounded-lg bg-slate-400 w-[25%] placeholder-black ml-3'
                placeholder='Serving size'
                required
                value={servingSize}
                onChange={(event) => onIngredientChange('servingSize', event.target.value)} >
                <option value="" disabled={true}>Serving Size</option>
                {servingSizeOptions.map(sizeOption => (
                    <option value={sizeOption} name="serving-size">{sizeOption}</option>
                ))}
            </select>
            <input
                type="text"
                className='p-3 rounded-lg bg-slate-400 w-[40%] placeholder-black mx-3'
                placeholder='Ingredient Name'
                value={name}
                onChange={event => onIngredientChange('name', event.target.value)} />
            <button
                className='pr-3'
                onClick={onRemove}><ImMinus />
            </button>
        </div>
    )
}

export default Ingredient