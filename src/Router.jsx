import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/loyouts/AppLayout';
import Home from './components/pages/home/Home';
import ReduxCounter from './components/pages/redux/ReduxCounter';
import Invoices from './components/pages/invoices/Invoices';
import Invoice from './components/pages/invoices/Invoice';
import CarInventory from './components/pages/carInventory';

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Home />}></Route>
                <Route path='counter' element={<ReduxCounter />}></Route>
                <Route path='carInventory' element={<CarInventory />}></Route>
                <Route path='invoices' element={<Invoices />}>
                    <Route index element={<main style={{ padding: "1rem" }}><p>Select an invoice</p></main>} />
                    <Route path=':invoiceId' element={<Invoice custom={1} />}></Route>
                </Route>
                <Route path='*' element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>;
}
