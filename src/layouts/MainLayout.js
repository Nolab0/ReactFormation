import React from 'react'
import Header from '../components/Header'
import style from '../styles/Header.module.css'

function MainLayout(props) {
    return (
        <>
            <Header />
            <div>
                <div className={style.center700px}>
                    {props.children}
                </div>
                <div>
                    You are currently not connected
                </div>
            </div>
        </>
    )
}

export default MainLayout