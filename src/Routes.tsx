import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrderPage } from "./page/CompleteOrder";
import { HomePage } from "./page/Home";
import { OrderConfirmedPage } from "./page/OrderComfirmed";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeorder" element={<CompleteOrderPage />} />
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
            </Route>
        </Routes>
    )
}