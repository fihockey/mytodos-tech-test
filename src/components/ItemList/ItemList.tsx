import "./ItemList.scss"
import Item from "./Item/Item"



type ItemListProps = {
    toDoItems: string[];
    deleteItem: (index: number) => void;
}


const ItemList = ({toDoItems, deleteItem} : ItemListProps) => {


    return (

        <div className="item-list_container">
            {toDoItems.map((toDoItems, index) => (
                <Item key={index} text={toDoItems} deleteItem={deleteItem}/>
            ))}
            
        </div>

    )
}

export default ItemList