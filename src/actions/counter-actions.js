const actionTypes={
    INCREMENT:"counter/increment",
    DECREMENT:"counter/decrement",
    INCREMENT_BY:"counter/incrementBy",
    CHNAGE_AMOUNT:"counter/changeAmount"
};
const increment=()=>{
    return {type:actionTypes.INCREMENT}
}

const decrement=()=>{
    return {type:actionTypes.DECREMENT}
}

const incrementBy=()=>{
    return {type:actionTypes.INCREMENT_BY}
}

const changeAmount=(amount)=>{
    return {type: actionTypes.CHNAGE_AMOUNT, payload:amount}
}
export default { increment, decrement, incrementBy,changeAmount }
export {actionTypes};