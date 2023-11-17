import { useLocation } from "react-router-dom"

function ViewMore(){

    const {state} = useLocation()
    console.log(state)

    return(
        <>
         <div class="card" style={{width: '18rem'}}>
            <img class="card-img-top" src={state.images[0]} alt="Card image cap"/>
            <div class="card-body">
            <h5 class="card-title">{state.title}</h5>
            <h5 class="card-price">Discount &#8377; {(state.price - (state.price * (state.discountPercentage / 100))).toFixed(2)}</h5>
            <h5 class="card-price">M.R.P <s>&#8377; {state.price} ({state.discountPercentage + " %"}) </s></h5>
            <p class="card-text">{state.description}</p>
            {/* <a onClick={() => {handleNavigate(state)}} class="btn btn-primary">View More</a> */}
            </div>
         </div>
        </>
    )
}

export default ViewMore