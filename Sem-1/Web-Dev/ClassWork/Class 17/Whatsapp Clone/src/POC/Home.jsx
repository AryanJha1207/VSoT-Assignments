import React from 'react'

const Home = () => {
const setIsLoggedIn = props.setIsLoggedIn;

    const handleLogout = () => {
        setIsLoggedIn(false);
        alert("User Logged Out")
        navigate("/Login");
    }

return (
    <>  
        <div>Home Page</div>
        <button onClick={handleLogout}>LogOut</button>
    </>
  )
}

export default Home
