import { Route, Routes} from "react-router-dom"
import Product from "../pages/Product"
 
 const AppRoutes: React.FC = () => {
   return (
     <Routes>
      
       <Route path="/" element= {<Product/>}/>
     </Routes>
   )
 }
 
 
 export default AppRoutes
 