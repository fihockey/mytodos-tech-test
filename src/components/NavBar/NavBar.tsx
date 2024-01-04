import "./NavBar.scss"
import ItemInput from "./ItemInput/ItemInput"
import ResetButton from "./ResetButton/ResetButton"


type NavBarProps = {
    addItem: (item: string) => void;
    resetItem: () => void
}


const NavBar = ({addItem, resetItem} : NavBarProps) => {

    return (
        <div className="navbar_container">
            <ItemInput addItem={addItem}/>
            <ResetButton resetItem={resetItem}/>
        </div>

    )
}

export default NavBar