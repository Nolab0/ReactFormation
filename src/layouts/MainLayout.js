import React, { useState } from 'react'
import Header from '../components/Header'
import style from '../styles/Header.module.css'
import layoutStyle from '../styles/App.module.css'
import btnStyle from '../styles/CreatePost.module.css'
import appStyle from '../styles/App.module.css'

function MainLayout(props) {

    const [isConnected, setIsConnected] = useState(false);

    return (
        <div id={layoutStyle.MainLayout}>
            <Header />
            <div style={{ display: 'flex', flex: 1 }}>
                <div className={style.center700px}>
                    {props.children}
                </div>
                <div className={appStyle.sidebar}>
                    <p>{`You are currently ${isConnected ? 'connected' : 'disconnected'}`}</p>
                    <button className={btnStyle.btn} onClick={() => setIsConnected(!isConnected)}>
                        {isConnected ? "Disconnect" : "Connect"}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default MainLayout