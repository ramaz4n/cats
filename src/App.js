import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import {AuthContext} from './AuthContext';
import './App.css';
import Header from './components/Header/Header';
import AllCat from './pages/AllCat/AllCat';
import LikeCat from './pages/LikeCat/LikeCat';


function App() {
   const [items, setItems] = useState([])


   return (
      <AuthContext.Provider value={{
         items, setItems
      }}>
         <div className="App">
				<Header/>

				<Routes>
					<Route path="/" element={<AllCat/>} />
					<Route path="/likecat" element={<LikeCat/>} />
    		   </Routes>
		   </div>
      </AuthContext.Provider>
   );
}

export default App;