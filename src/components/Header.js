import { useState } from "react"

function Header() {
    // let title = "The Facebook";
    const [title, setTitle] = useState("The Facebook"); // The Facebook -> value by default, setTitle -> setter for title var

    const changeTitle = () => setTitle("Facebook");

    return (
        <>
            <h1>{title}</h1>
            <button onClick={changeTitle}>Click here</button>
        </>
    )
}

export default Header;