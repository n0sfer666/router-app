import React, { useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

export default function Router() {
  const {hostname} = window.location
  const isDeploy = useMemo(() => hostname !== 'localhost', [hostname])
  const homePath = useMemo(() => isDeploy ? '/router-app' : '/', [isDeploy])
  return (
    <BrowserRouter>
      <Routes>
        <Route path={homePath} element={<App />} />
        <Route path={`${homePath}/app`} element={
          <h1 style={{textAlign: 'center', color: 'burlywood'}}>You will DIE!</h1>
        } />
        <Route path='*' element={<h1 style={{textAlign: 'center'}}>Damn!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}