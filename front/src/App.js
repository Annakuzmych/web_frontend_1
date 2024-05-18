import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainQuiz from "./components/MainQuiz";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoPage from "./components/NoPage";
import AboutPage from "./components/AboutPage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import UserProfilePage from "./components/UserProfilePage";

function App() {
    return (
        <div >
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<NoPage/>}/>
                    <Route index element={<MainQuiz/>}/>
                    <Route path="/home" element={<MainQuiz/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/profile" element={<UserProfilePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
