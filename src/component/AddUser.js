import React, { useState } from 'react';

const AddUser = () => {
    const [users, setUsers] = useState({})
    const handleSubmit = event => {
        event.preventDefault();
        console.log(users)

        fetch(`http://localhost:5000/users`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data =>{
           console.log(data)
           if(data.acknowledged){
            alert('Data insert succefully!')
            event.target.reset();
           }
            })
    }

    const handleChangeBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...users};
        newUser[field] = value;
        setUsers(newUser);
    }
    return (
        <div>
            <h2>Add User</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" onBlur={handleChangeBlur} name='name' placeholder='name' required /><br />
                <input type="text" onBlur={handleChangeBlur} name='adress' placeholder='address' required /><br />
                <input type="email" onBlur={handleChangeBlur} name='email' placeholder='email' required /><br />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default AddUser;