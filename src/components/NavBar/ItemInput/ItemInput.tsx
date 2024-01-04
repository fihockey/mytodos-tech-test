import { useState } from "react";
import { ChangeEvent } from "react"
import "./ItemInput.scss"


type ItemInputProps = {
    addItem: (item: string) => void;
}

const ItemInput = ({addItem} : ItemInputProps) => {

    const [input, setInput] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleAddItem = () => {
        if (input.trim() !== '') {
            addItem(input);
            setInput('')
        }
    }

    return (
        <div className="item-input_container">
            <input type="text" 
            value={input} 
            onChange={handleInputChange}
            placeholder="Add your task here..."/>
            <button onClick={handleAddItem} className="item-input_button">+</button>
        </div>
    )
}

export default ItemInput