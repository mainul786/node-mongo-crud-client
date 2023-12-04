import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    console.log(storedUser);

    const [users, setUsers] = useState(storedUser)
    const handleUpdateUser = event => {
        event.preventDefault();
        console.log(users);
        fetch(`http://localhost:5000/users/${storedUser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                alert('updated successfully')
            }
        })
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
                <input type="text" onChange={handleInputChange} defaultValue={storedUser.address} name='address' placeholder='address' required /><br />
                <input type="email" onChange={handleInputChange} defaultValue={storedUser.email} name='email' placeholder='email' required /><br />
                <button type="submit">Update User</button>
            </form>

        </div>
    );
};

export default Update;