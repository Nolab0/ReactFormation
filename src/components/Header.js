import style from "../styles/Header.module.css"

function Header() {
    let title = "The Facebook";
    // const [title, setTitle] = useState("The Facebook"); // The Facebook -> value by default, setTitle -> setter for title var

    return (
        <>
            <h1 className={style.header}>{title}</h1>
        </>
    )
}


export default Header;