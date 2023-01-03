import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { CompleteOrderPage } from "./page/CompleteOrder";
import { HomePage } from "./page/home";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/completeorder" element={<CompleteOrderPage />} />
        </Routes>
    )
}