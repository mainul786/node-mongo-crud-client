import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);
const handleDelete = user =>{
    const agree = window.confirm(`Are you sure want to delete ${user.name}`)
   if(agree){
    fetch(`http://localhost:5000/users/${user._id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
       if(data.deletedCount > 0){
        alert(` deleted succefully`)
        const remaningUsers = displayUsers.filter(urs => urs._id !== user._id);
        setDisplayUsers(remaningUsers);
       }
    })
   }
}
    return (
        <div>
            <h1>User: {displayUsers.length}</h1>
            <div>
                {
                    displayUsers.map(user => <p key={user._id}>
                        {user?.name} 
                         {user?.adress}
                         {user?.email}
                         <Link to={`/update/${user._id}`}>
                            <button>Update</button>
                         </Link>
                         <button onClick={()=>handleDelete(user)}>X</button>
                    </p> )
                }
            </div>
        </div>
    );
};

export default Home;