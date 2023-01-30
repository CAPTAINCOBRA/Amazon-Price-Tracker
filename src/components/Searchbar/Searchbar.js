import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup, Card, Modal, Image } from "react-bootstrap";
import { trackerSliceAction } from "../../redux/Tracker/trackerSlice";
import { useDispatch, useSelector } from "react-redux";
import * as trackerActions from "../../redux/Tracker/trackerActions";
import "./Searchbar.scss";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const { searchedProductDetails, searchEmpty } = useSelector(
    (state) => state.tracker
  );

  const handleClose = () => setShowTrackModal(false);

  const handleClear = () => {
    setSearchValue("");
    dispatch(
      trackerSliceAction.updateState({
        key: "searchedProductDetails",
        value: {},
      })
    );
    dispatch(
      trackerSliceAction.updateState({
        key: "searchEmpty",
        value: true,
      })
    );
  };

  const changeProductDescription = (property, value) => {
    dispatch(
      trackerSliceAction.updateState({
        key: "searchedProductDetails",
        value: { ...searchedProductDetails, [property]: value },
      })
    );
  };

  const confirmTracking = (event) => {
    const form = event.currentTarget;
    if (
      searchedProductDetails.name === "" ||
      searchedProductDetails.reqPrice === "" ||
      searchedProductDetails.url === ""
    ) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      dispatch(trackerActions.addToWatchList());
      handleClose();
    }
  };

  const searchAmazon = async (e) => {
    e.preventDefault();
    // No longer using the below approach
    // const productId = searchValue.split("/")[5];
    // console.log("Product ID: ", productId);
    // await dispatch(trackerActions.searchAmazon(productId));
    await dispatch(trackerActions.searchAmazon(searchValue));
  };

  useEffect(() => {
    console.log("Populated details!");
  }, [searchedProductDetails]);

  return (
    <div className="container-fluid searchContainer">
      <Image className="ImageHome" src="/images/price-tracker-bg.png"></Image>
      <div className="searchbar">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            autoFocus
          />
          <Button variant="outline-success" onClick={(e) => searchAmazon(e)}>
            Search
          </Button>
        </Form>

        {!searchEmpty && searchedProductDetails && (
          <Card style={{ width: "28rem", margin: "auto" }} className="mt-5">
            <Card.Img
              style={{
                width: "15rem",
                height: "15rem",
                margin: "auto",
                padding: "1rem",
              }}
              variant="top"
              src={searchedProductDetails.image}
            />
            <Card.Body>
              <Card.Title>{searchedProductDetails.name}</Card.Title>
              <Card.Text>
                {searchedProductDetails === undefined ||
                searchedProductDetails === null ? (
                  <p>Not Available</p>
                ) : (
                  searchedProductDetails.details
                )}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="Price">
                <p>₹ {searchedProductDetails.price}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                Reviews - {searchedProductDetails.reviews}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body className="Actions">
              <Button
                href="#"
                className="btn btn-outline"
                variant="outline-success"
                onClick={() => setShowTrackModal(true)}
              >
                Track
              </Button>
              <Card.Link
                href="#"
                onClick={handleClear}
                className="btn btn-outline-danger"
              >
                Close
              </Card.Link>
            </Card.Body>
          </Card>
        )}
        <Modal show={showTrackModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Track Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product Name"
                  autoFocus
                  value={searchedProductDetails.name}
                  onChange={(e) =>
                    changeProductDescription("name", e.target.value)
                  }
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Product Decription</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  placeholder="Enter Product Description"
                  value={searchedProductDetails.details}
                  onChange={(e) =>
                    changeProductDescription("details", e.target.value)
                  }
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid description.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Wanted Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  onChange={(e) =>
                    changeProductDescription("reqPrice", e.target.value)
                  }
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid price.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) =>
                    changeProductDescription("infoEmail", e.target.value)
                  }
                  required
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              onClick={(e) => confirmTracking(e)}
            >
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Searchbar;
