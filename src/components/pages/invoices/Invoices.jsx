import React from 'react';
import {NavLink, Outlet} from 'react-router-dom'
import { getInvoices} from '../../../data/data'

export default class Invoices extends React.Component{
    constructor(props){
        super(props);
        this.state={'filter':''}
        this.searchBoxOnChnage=this.searchBoxOnChnage.bind(this);
    }

    searchBoxOnChnage(e){
        let filter=e.target.value;
        this.setState({filter});
    }

    render(){
        let invoices= getInvoices();
        
        return <main style={{ padding: "1rem 0" }}>
            <h2>Invoices</h2>
            <div style={{display:'flex'}}>
                <nav
                    style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                    }}
                >
                    <input value={this.state.filter} onChange={this.searchBoxOnChnage}></input>
                    {
                        invoices.filter(f=>{
                            let searchTerm=this.state.filter.toLowerCase();
                            if(!searchTerm)return true;
                            else return f.name.toLowerCase().indexOf(searchTerm)>-1
                        })
                        .map((invoice) => (
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1rem 0",
                                        color: isActive ? "red" : "",
                                    };
                                }}
                                className={({isActive})=>isActive?"active":"_"}
                                to={`/invoices/${invoice.number}`}
                                key={invoice.number}
                            >
                                {invoice.name}
                            </NavLink>
                        ))
                    }
                </nav>
                <Outlet></Outlet>
            </div>
        </main>
    }

}