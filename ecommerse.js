let products=[];
async function fetData(){
    try{
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        products = [...data.products]
        str =``
        products.map((product)=>{
            str +=`<div class="card">
                    <div class="img">
                        <img src=${product.thumbnail} alt=""> 
                    </div>

                    <div class="productname">
                            <h2>${product.title}</h2>
                    </div>

                    <div class="price">
                        <h3 class="actualprice">$${product.price}</h3>
                         <h3>$${(product.price-((product.discountPercentage)/product.price)).toFixed(2)}</h3>
                        
                    </div>

                    <div class="discount">
                        <h4>${product.discountPercentage}% off</h4>
                    </div>

                </div>`

        })
        document.getElementById("container")
        .innerHTML = str
    } catch(error){

    }
}
fetData()