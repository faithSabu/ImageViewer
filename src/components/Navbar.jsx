import React from 'react'
import { useEffect } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db,auth } from '../firebase';
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [userDetails, setUserDetails] = useState([])
    const data = localStorage.getItem('user')
    const currentUser = JSON.parse(data)
    const navigate = useNavigate()

    useEffect(() => {
        const getUserData = async () => {
            const docRef = doc(db, "users", currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setUserDetails(docSnap.data())
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        }
        getUserData()
    }, [])

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/login')
        }).catch((error) => {
            // An error happened.
        });
        localStorage.clear()
    }

    return (
        <div className='NavbarContainer'>
            <div className="userInfo">
                <div className='data'>
                    <span onClick={() => console.log(userDetails)}>{userDetails.displayName}</span>
                    <span>{userDetails.email}</span>
                </div>
                <div>
                    <span style={{ cursor: 'pointer' }} onClick={handleLogout}>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar