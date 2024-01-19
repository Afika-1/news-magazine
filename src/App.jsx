// import React from 'react'

import { Navbar } from "./components/Navbar";
import { NewsBoard } from "./components/NewsBoard";
import { NewsItems } from "./components/NewsItems";

 const App = () => {
  return (
    <div>
     <Navbar/>
     <NewsBoard/>
     <NewsItems/>
    </div>
  )
}
export default App;