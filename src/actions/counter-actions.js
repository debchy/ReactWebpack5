const increment=()=>{
    return {type:'INCREMENT'}
}

const decrement=()=>{
    return {type:'DECREMENT'}
}

const incrementBy=()=>{
    return {type:'INCREMENT_BY'}
}

const changeAmount=(amount)=>{
    return {type:'CHNAGE_AMOUNT', payload:amount}
}
export default { increment, decrement, incrementBy,changeAmount }