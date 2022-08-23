import React from 'react'
import { useState, useContext } from 'react';
import btnStyle from '../styles/CreatePost.module.css';
import style from '../styles/Profile.module.css'
import UserContext from '../contexts/UserContext';

function ProfilePage() {

    const { user, setUser } = useContext(UserContext);

    const [userNameText, setUserNameText] = useState(user.author);
    const [profilePic, setprofilePic] = useState(user.authorPicture);

    const updateProfile = e => {
        e.preventDefault();
        setUser({
            author: userNameText,
            authorPicture: profilePic
        });
        alert('Profile upadted');
    }

    return (
        <div>
            <h1>Modify profile</h1>
            <form className={style.update_profile_form} onSubmit={updateProfile}>
                <h3>Name:</h3>
                <input type="text" value={userNameText} onChange={e => setUserNameText(e.target.value)} />
                <h3>Profile pic: </h3>
                <input type="text" value={profilePic} onChange={e => setprofilePic(e.target.value)} />
                <input className={btnStyle.btn} type="submit" value="Valider"></input>
            </form>
        </div>
    )
}

export default ProfilePage