import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// components 
import Navbar from './components/navbar/Navbar';
import TaskList from './pages/tasks/components/TaskList';
import MoviesList from './pages/api-movies/MoviesList';
import TaskForm from './pages/tasks/components/TaskForm';

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

          {/* Api movies */}
          <Route path='/api-movies' element={<MoviesList />}>

          </Route>

          {/* ?? */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
