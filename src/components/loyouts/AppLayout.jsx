import React from 'react';
import {NavLink ,Outlet} from 'react-router-dom'

export default class AppLayout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
                
                <nav style={{borderBottom: "solid 1px", paddingBottom: '1rem'}}>
                    <NavLink to='/' >Home</NavLink> |{" "}
                    <NavLink to='/invoices'>Invoices</NavLink> |{" "}
                    <NavLink to='/expenses'>Expenses</NavLink>
                </nav>
                <Outlet></Outlet>
            </>
        )
    }

}