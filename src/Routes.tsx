import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/Index";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
           <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/completeorder" element={<CompleteOrderPage/>} />
           </Route>
        </Routes>
    )
}