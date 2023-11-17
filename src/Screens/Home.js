import { useEffect, useState } from "react";
import '../Styles/Cards.css';
import { useNavigate } from "react-router-dom";

function Home(){
  
  const navigate = useNavigate();

    const [data , setData] = useState([])
    const [o_data , setOData] = useState([])

    function fetchData(){
        fetch('https://dummyjson.com/products').then((data => data.json())).then((result) => {
            console.log(result);

            setData(result.products);
            setOData(result.products);
        })
    }

    const handleNavigate = (el) => {
      navigate('/viewmore/' +el.id , {state : el})
    }


    useEffect(() => {
        fetchData()
    },[]);

    const handleSearch = (e) => {
      let tmp = o_data;
      let fd = tmp.filter((el) => {

        return el.title.toLowerCase().includes(e.target.value.toLowerCase());
      })

      setData(fd);
    }

    
    return(
        <>

{/* <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Brand</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Discount</th>
      <th scope="col">Image</th>
      
    </tr>
  </thead>
  <tbody>
          {data.map((el,i)=>(
            <tr>
              <th scope="row">{i+1}</th>
              <td>{el.title}</td>
              <td>{el.brand}</td>
              <td>{el.description}</td>
              <td>{el.price}</td>
              <td>{el.discountPercentage + " %"}</td>
              <td><img src={el.images[0]} style={{width:200, height:100}} /></td>
            </tr>
          ))}
    
  </tbody>
</table>
 */}

<div class="input-group">
  <div class="form-outline" style={{width: "100%" , marginTop: 20, marginBottom: 30}}>
    <input onChange={handleSearch} style={{width: "80%" , margin: "auto"}} type="search" id="form1" class="form-control" />
  </div>
</div>

<div className="container-center">

{data.map((el,i)=>(

<div class="card" style={{width: '18rem'}}>
  <img class="card-img-top" src={el.images[0]} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{el.title}</h5>
    <h5 class="card-price">Discount &#8377; {(el.price - (el.price * (el.discountPercentage / 100))).toFixed(2)}</h5>
    <h5 class="card-price">M.R.P <s>&#8377; {el.price} ({el.discountPercentage + " %"}) </s></h5>
    <p class="card-text">{el.description}</p>
    <a onClick={() => {handleNavigate(el)}} class="btn btn-primary">View More</a>
  </div>
</div>
))}

</div>


        </>
    )
}

export default Home;