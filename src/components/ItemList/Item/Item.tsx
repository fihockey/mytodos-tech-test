import { useState } from "react";
import "./Item.scss"


type ItemProps = {
    text: string;
    deleteItem: (index: number) => void;
}

const Item = ({text, deleteItem} : ItemProps) => {

    const [completed, setCompleted] = useState(false);

    const handleToggleCompleted = () => {
        setCompleted(!completed)
    }

    const handleDeleteItem = (event: React.MouseEvent<HTMLButtonElement>) => {
        const index = Number(event.currentTarget.dataset.index);
        deleteItem(index);
      };

    return (
        <div className="item_container">
            <input type="checkbox" checked={completed} onChange={handleToggleCompleted}/>
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
            <button onClick={handleDeleteItem}>🗑️</button>
        </div>
    )
}

export default Item