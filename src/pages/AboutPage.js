import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function AboutPage() {

    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>About</h1>
            <p>Welcome to The Facebook</p>
            <p>You are connected as {user.author}</p>
        </div>
    )
}

export default AboutPage