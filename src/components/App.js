import { useState } from 'react'
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage"
import ProfilePage from "../pages/ProfilePage";
import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout";
import UserContext from '../contexts/UserContext'

function App() {

  const [user, setUser] = useState({
    author: "User",
    authorPicture: "https://picsum.photos/seed/profile42/50/50"
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </MainLayout>
    </UserContext.Provider>
  )
}

export default App;