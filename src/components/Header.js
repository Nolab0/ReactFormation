import style from "../styles/Header.module.css"
import { ReactComponent as LogoSvg } from "../images/facebook-logo.svg"
import { Link } from 'react-router-dom'

function Header() {
    let title = "The Facebook";

    return (
        <div className={style.header}>
            <Link to="/" className={style.header_left}>
                <LogoSvg />
                <h1 >{title}</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}


export default Header;