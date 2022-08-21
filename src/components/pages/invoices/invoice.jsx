import React from 'react';
import {Link,useParams} from 'react-router-dom'
import { getInvoice} from '../../../data/data'

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}
class Invoice extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){        
        let invoice= getInvoice(parseInt(this.props.params.invoiceId,10));
        console.log("invoice",invoice);
        return <main style={{ padding: "1rem 0" }}>
            <h2>Invoice -- {invoice.number}</h2>
            <h3>Total Due: {invoice.amount}</h3>
            <p>
                {invoice.name}: {invoice.number}
            </p>

            <p>Due Date: {invoice.due}</p>
        </main>
    }

}
export default withParams(Invoice)