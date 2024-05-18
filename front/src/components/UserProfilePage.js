import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";

const UserProfilePage = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get('/api/profile')
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.error('Error fetching profile:', error);
            });
    }, []);
    const [isEditing, setIsEditing] = useState(false);


    const handleEditProfile = () => {
        setIsEditing(!isEditing);
    };
    const handleSaveChanges = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const updatedProfile = {
            name: formData.get('name'),
            email: formData.get('email'),
            gender: formData.get('gender'),
            dob: formData.get('dob')
        };

        // Відправляємо оновлені дані на сервер
        try {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProfile)
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            setProfile(updatedProfile);

            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };
    useEffect(() => {
        // Отримуємо дані профілю з сервера
        const fetchProfile = async () => {
            try {
                const response = await fetch('/api/profile');
                if (!response.ok) {
                    throw new Error('Failed to fetch profile');
                }

                const profileData = await response.json();

                // Оновлюємо дані профілю в стані
                setProfile(profileData);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);



    return (
        <div>
            <Header />
            <main className="container mx-auto my-4 flex-grow-1">
                <section id="user-profile" className="mb-8">
                    <div className="flex items-center mb-4">
                        <div>
                            <h3 className="text-lg font-semibold ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path
                                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                                </svg>
                                <span className="text-gray-600 mx-3">{profile.email}</span>
                            </h3>
                        </div>
                    </div>
                    <table className="table-auto w-full">
                        <tbody>
                        <tr>
                            <td className="px-4 py-2">Name</td>
                            <td id="userName" className="px-4 py-2">{profile.name}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Email</td>
                            <td id="userEmail" className="px-4 py-2">{profile.email}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Gender</td>
                            <td id="userGender" className="px-4 py-2">{profile.gender}</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">Date of Birth</td>
                            <td id="userDob" className="px-4 py-2">{profile.dob}</td>
                        </tr>
                        </tbody>
                    </table>
                    <button id="editProfileButton" className="btn btn-secondary my-3" onClick={handleEditProfile}>Edit Profile</button>
                </section>
            </main>
            {isEditing && (
                <form id="editProfileForm" className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow-lg" style={{ zIndex: 1000 }}>
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" id="name" name="name" className="form-control mb-3" required defaultValue={profile.name} />
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" className="form-control mb-3" required defaultValue={profile.email} />
                    <label htmlFor="gender" className="form-label">Gender:</label>
                    <input type="text" id="gender" name="gender" className="form-control mb-3" required defaultValue={profile.gender} />
                    <label htmlFor="dob" className="form-label">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" className="form-control mb-3" required defaultValue={profile.dob} />
                    <button type="submit" className="btn btn-info">Save Changes</button>
                </form>
            )}
            <Footer />
        </div>
    );
};

export default UserProfilePage;
