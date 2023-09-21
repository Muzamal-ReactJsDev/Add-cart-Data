import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaHeart, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  showUser,
  showUserPics,
} from "./UserDataSlice/UserSlice"; // Adjust the path as needed
import "./Show.css";
const Show = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
    dispatch(showUserPics());
  }, []);

  //   const { users, loading, usersPics } = useSelector((state) => state.UserSlice);
  const { users, loading, usersImageData } = useSelector((state) => state.app);

  // agar hym just cart ki items ko hi send krna chahty hain to hum kuxh is trah sy karian gay. kio k hum na image ma concatination kiya how ha to us waja sy jis trah necahy likha howa h wesy likhian gay......
  // const handleAddToCart = (item) => {

  //     dispatch(addItemToCart(item)); // Dispatch the addItemToCart action from the CartSlice
  //     navigate("/cart");
  //   };

  //   this is for the data to add the cart items....

  const handleAddToCart = (item) => {
    const cartItem = {
      image: `${usersImageData?.base_urls?.product_image_url}/${item.image}`,
      name: item.name,
      price: item.price,
    };
    dispatch(addItemToCart(cartItem)); // Dispatch the addItemToCart action from the CartSlice
  };
  if (loading) {
    return <h5>Data is Loading.......!!</h5>;
  }
  return (
    <>
      <h1>Rao Muzamal</h1>
      <Container>
        <Row>
          {users[0]?.products?.map((drinks, index) => (
            <Col
              xs={5}
              className="main-column"
              style={{ backgroundColor: "gray" }}
              key={index}
              //   onClick={handleAddToCart}
              onClick={() => handleAddToCart(drinks)}
            >
              <Row className="p-2">
                <Col xs={3} className="sandwich-image-col">
                  <img
                    className="sandwich-image"
                    src={`${usersImageData?.base_urls?.product_image_url}/${drinks?.image}`}
                    alt=""
                  />
                </Col>
                <Col xs={7} className="sandwich-names-price">
                  <div className="sandwich-both-name-discount">
                    <h7>{drinks.name}</h7>
                    <br />
                    <h7>${drinks.price}</h7>
                  </div>
                </Col>
                <Col xs={2} className="sandwich-icons-col">
                  <div className="sandwich-icons">
                    <div>
                      <FaHeart className="sandwich-icons-heart" />
                    </div>
                    <br />
                    <div>
                      <FaPlus className="sandwich-icons-plus" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Show;
