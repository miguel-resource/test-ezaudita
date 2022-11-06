import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components 
import Navbar from './components/navbar/Navbar';
import TaskList from './components/tasks/TaskList';
import MoviesList from './components/api-movies/MoviesList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<TaskList />}></Route>
          <Route path='/api-movies' element={<MoviesList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
