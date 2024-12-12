import React,{useContext} from 'react'
import {Navigate,Route, Routes} from 'react-router-dom'
import { AuthContext } from '../services/AuthedContext'
import Layout from './shared/Layout';


const PrivateRoute = ({ component: Component, path, ...rest }:any) => {
    const context=useContext(AuthContext);

  return (
    <Routes>
        <Route element={<Layout/>}>
        <Route
        {...rest}
        path={path}
        element={context.isAuthenticated?<Component/>:<Navigate to="/login/"/>}
        />
      </Route>
    </Routes>
  )
}

export default PrivateRoute
