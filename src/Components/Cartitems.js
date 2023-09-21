// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import "./Cartitems.css"
// import { removeFromCart } from "./UserDataSlice/UserSlice";
// const Cartitems = () => {
//     const dispatch=useDispatch()
//   const { cart } = useSelector((state) => state.app);
//   console.log(cart);
// //   const handleRemoveFromCart=(item)=>{
// //     dispatch(removeItemToCart(item))
// //   }

//   const handleRemoveFromCart = (item) => {
//     dispatch(removeFromCart(item)); // Dispatch removeItemFromCart action
//   };
//   return (
//     <div>
//       <Container>
//         <Row>
//           <h2>Cart Items</h2>
//           {cart.map((item) => (
//             <Col xs={12}  key={item.id}  className="main-cart-col mb-3" >
//               <Row>
//                 <Col xs={3}>
//                   {" "}
//                   <img className="cart-image" src={item.image} alt="Image" />
//                 </Col>
//                 <Col xs={7}>
//                   {" "}
//                   <h3>Name:{item.name}</h3>
//                   <h5>${item.price}</h5>
//                 </Col>
//                 <Col xs={2}>
//                 <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                 
//                 </Col>

               
//               </Row>
//             </Col>
//           ))}

//           {/* <button onClick={handleClearCart}>Clear Cart</button> */}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Cartitems;
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./UserDataSlice/UserSlice";
import "./Cartitems.css";

const Cartitems = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.app);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item)); // Dispatch the removeFromCart action with the item data
  };

  return (
    <div>
      <Container>
        <Row>
          <h2>Cart Items</h2>
          {cart.map((item) => (
            <Col xs={12} key={item.id} className="main-cart-col mb-3">
              <Row>
                <Col xs={3}>
                  {" "}
                  <img className="cart-image" src={item.image} alt="Img" />
                </Col>
                <Col xs={7}>
                  {" "}
                  <h3>Name: {item.name}</h3>
                  <h5>${item.price}</h5>
                </Col>
                <Col xs={2}>
                  <button onClick={() => handleRemoveFromCart(item)}>
                    Remove
                  </button>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cartitems;
