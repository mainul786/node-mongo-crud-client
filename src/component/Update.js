import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    console.log(storedUser);

    const [users, setUsers] = useState({})
    const handleUpdateUser = event => {
        event.preventDefault();
        console.log(users)
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...users};
        newUser[field] = value;
        setUsers(newUser);
    }
    return (
        <div>
            <h2>Add User</h2>

            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleInputChange} defaultValue={storedUser.name} name='name' placeholder='name' required /><br />
                <input type="text" onChange={handleInputChange} defaultValue={storedUser.address} name='adress' placeholder='address' required /><br />
                <input type="email" onChange={handleInputChange} defaultValue={storedUser.email} name='email' placeholder='email' required /><br />
                <button type="submit">Update User</button>
            </form>

        </div>
    );
};

export default Update;