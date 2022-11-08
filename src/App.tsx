import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
/* Components */
import Navbar from './components/navbar/Navbar';
// page: to-do
import TaskList from './pages/tasks/components/TaskList';
import TaskForm from './pages/tasks/components/TaskForm';
// page: products
import ProductsList from './pages/api-store/components/ProductsList';
import SearchProduct from './pages/api-store/components/SearchProduct';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          {/* to-do list */}
          <Route path='/task-list' element={<TaskList />}>
            <Route path='/task-list/create-task' element={<TaskForm />}></Route>
            <Route path='/task-list/edit-task/:id' element={<TaskForm />}></Route>
          </Route>
          <Route path='/' element={<Navigate to='/task-list' replace />}></Route>

          {/* Api store */}
          <Route path='/api-store' element={<ProductsList />}>
            <Route path='/api-store/home' element={<Navigate to='/api-store'/>}></Route>
            <Route path='/api-store/search' element={<SearchProduct/>}></Route>
            <Route>

            </Route>
          </Route>

          {/* ?? */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
