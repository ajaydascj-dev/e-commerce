import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import { Landing , Dashboard ,Error , Login } from "./pages";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='landing' element={<Landing/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
   </BrowserRouter>
    
 
  )
}

export default App
