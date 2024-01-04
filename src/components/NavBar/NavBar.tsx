import "./NavBar.scss"
import ItemInput from "./ItemInput/ItemInput"
import ResetButton from "./ResetButton/ResetButton"

const NavBar = () => {

    return (
        <div className="navbar_container">
            <ItemInput />
            <ResetButton />
        </div>

    )
}

export default NavBar