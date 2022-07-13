import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage"
import ProfilePage from "../pages/ProfilePage";
import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from "../layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </MainLayout>
  )
}

export default App;