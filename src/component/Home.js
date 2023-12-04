import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
const handleDelete = user =>{
    const agree = window.confirm(`Are you sure want to delete ${user.name}`)
   if(agree){
    // console.log( user._id)
    fetch(`http://localhost:5000/users/${user._id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // alert('deleted successfully!');
    })
   }
}
    return (
        <div>
            <h1>User: {users.length}</h1>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        {user?.name} 
                         {user?.adress}
                         {user?.email}
                         <button onClick={()=>handleDelete(user)}>X</button>
                    </p> )
                }
            </div>
        </div>
    );
};

export default Home;