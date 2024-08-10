
import { Routes, Route, useParams} from "react-router-dom";
import HomePage from "./page/home";
import DatePage from "./page/datePage";
import LocationPage from "./page/LocationPage";
import LovePage from "./page/lovePage";
import PaymentPage from "./page/paymentPage";
import LayoutPage from "./layout/layoutPage";

export default function App() {
  const { name } = useParams();
 
  
  return (
    <>

      <Routes>
      <Route path="/:name?" element={<LayoutPage/>}/>
            <Route path="/:name?/home" element={<HomePage/>}/>
            <Route path="/:name?/date" element={<DatePage/>} />
            <Route path="/:name?/location" element={<LocationPage/>} />
            <Route path="/:name?/love" element={<LovePage/>} />
            <Route path="/:name?/rsvp" element={<PaymentPage/>} />
      </Routes>
  
   
    </>

  )
}
