import './App.css';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom"
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}


function Homepage(props) {

  const nav_item = [
    "Home",
    "About",
    "Shop"
  ];

  const [item_details] = useState([
    {
      name: "Fancy Product",
      price: "$40.00 - $80.00",cartValue: false
    },
    {
      name: "Special Item",
      price: "$18.00",cartValue: false
    },
    {
      name: "Sale Item",
      price: "$25.00",cartValue: false
    },
    {
      name: "Popular Item",
      price: "$40.00",cartValue: false
    },
    {
      name: "Sale Items",
      price: "$25.00",cartValue: false
    },
    {
      name: "Fancy Products",
      price: "$120.00 - $280.00",cartValue: false
    },
    {
      name: "Special Items",
      price: "$18.00",cartValue: false
    },
    {
      name: "Popular Items",
      price: "$40.00",cartValue: false
    }
  ]);

  const[value, setValue] = useState(0);
  const handleClick = (data,name) => {
    setValue(value + data);
    item_details.map((data) => {
      if(name === data.name)
      data.cartValue = !data.cartValue
      return data;
    })
  }
  return (
    <div className="flex">

      <div className="nav-bar">
        <Link className="nav-item1" to="/">
          Start Bootstrap
        </Link>
        {nav_item.map((items) =>
          <Link className="nav-item" to="/">
            {items}
          </Link>
        )}

        <button className="cart">🛒Cart <span className="bold">{value}</span></button>
      </div>

      <div className="title">
        <p className="midtit1">Shop in style</p>
        <span className="midtit2">With this shop hompeage template</span>
      </div>

      <div className="Main-content">
        {item_details.map((item, index) =>
          <Flexbox key={index} value={item} parentCallBack = {handleClick} />

        )}
      </div>

    </div>
  );
}

function Flexbox(props) {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  // const [ show, setShow ] = useState(true);

var cartName = !props.value.cartValue ? "Add to cart" : "Remove";
  const name = props.value.name;

  const handleChange = () => {
    if(cartName === "Add to cart")
    props.parentCallBack(1,name);
    else
    props.parentCallBack(-1,name)
  }

  return (
    <div className="flexbox">
      <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="pattern" />
      <div>
        <p>{props.value.name}</p>
        <p className="price">{props.value.price}</p>

        <div className="rating">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>

      </div>
      <div>
        <button className="acart" 
        // onClick={() => setShow(!show)} 
        // >{show?"Add to Cart":"Remove"}</button>
        onClick={handleChange}>{cartName}</button>
        {/* >Add to cart</button> */}

      </div>
    </div>

  );
}

export default App;
