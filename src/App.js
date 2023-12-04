
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import AddUser from './component/AddUser';

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
  }
])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
