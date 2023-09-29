import { useEffect, useState } from "react";

function Home(){

    const [data , setData] = useState([])

    function fetchData(){
        fetch('https://dummyjson.com/products').then((data => data.json())).then((result) => {
            console.log(result);
            setData(result.products);
        })
    }


    useEffect(() => {
        fetchData()
    },[])

    
    return(
        <>

<table class="table">
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



        </>
    )
}

export default Home;