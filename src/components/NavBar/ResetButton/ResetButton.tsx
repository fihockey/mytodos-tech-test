import "./ResetButton.scss"

type ResetButtonProps = {
    resetItem: () => void;
}

const ResetButton = ({resetItem} : ResetButtonProps) => {

    return (

        <div className="reset-button_container">
            <button onClick={resetItem}>Reset</button>

        </div>

    )

}

export default ResetButton