import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import { useUser } from 'reactfire'
import { createContext, useEffect, useState } from 'react';
/* Components */
import Navbar from './components/navbar/Navbar';
// page: to-do
import TaskList from './pages/tasks/components/TaskList';
import TaskForm from './pages/tasks/components/TaskForm';
// page: products
import ProductsList from './pages/api-store/components/ProductsList';
import SearchProduct from './pages/api-store/components/SearchProduct';
// page: resume
import Resume from './pages/resume/components/Resume'

/* models */
import { Account } from './models/Account';
import { firebaseConfig } from './firebase-config';
import { AuthRoute } from './context/AuthRoute';
import Auth from './pages/auth/Auth';
import { initializeApp } from 'firebase/app';

initializeApp(firebaseConfig)

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>

          {/* TO-DO LIST */}
          <Route path="/task-list" element={<AuthRoute>
            <TaskList />
          </AuthRoute>}>
            <Route path="/task-list/create-task" element={<AuthRoute><TaskForm /></AuthRoute>}></Route>
            <Route path='/task-list/edit-task/:id' element={<AuthRoute><TaskForm /></AuthRoute>}></Route>
          </Route>
          <Route path='/' element={<Navigate to='/task-list' replace />}></Route>

          {/* Api store */}
          <Route path='/api-store' element={<AuthRoute><ProductsList /></AuthRoute>}>
            <Route path='/api-store/home' element={<Navigate to='/api-store' />}></Route>
            <Route path='/api-store/search' element={<SearchProduct />}></Route>
            <Route>
            </Route>
          </Route>

          {/* Resume */}
          <Route path='/resume' element={<AuthRoute><Resume /></AuthRoute>}></Route>

          {/* login */}
          <Route path='/login' element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
