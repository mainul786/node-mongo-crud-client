
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import AddUser from './component/AddUser';
import Update from './component/Update';

function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    loader:()=>fetch(`http://localhost:5000/users`)
  },
  {
    path:'/user/add',
    element:<AddUser></AddUser>
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
