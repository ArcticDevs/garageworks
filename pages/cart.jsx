import Image from "next/image";
import React, { useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import styles from "../styles/cart.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import styles1 from "../styles/search.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles2 from "../styles/account.module.css";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => <></>);

  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{
        color: "#0d3b66",
        fontWeight: "600",
        fontSize: "20px",
        backgroundColor: "none",
        cursor: "pointer",
        color: "#ee3c2f",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={() => {
        decoratedOnClick();
        setClicked(!clicked);
      }}
    >
      {children}
      {clicked ? (
        <svg
          style={{ width: "24px", height: "24px", marginRight: "5px" }}
          viewBox="0 0 24 24"
        >
          <path fill="gray" d="M20 14H4V10H20" />
        </svg>
      ) : (
        <svg
          style={{ width: "24px", height: "24px", marginRight: "5px" }}
          viewBox="0 0 24 24"
        >
          <path fill="gray" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
        </svg>
      )}
    </div>
  );
}

function IssueModal(props) {
  const [issueText, setIssueText] = useState("");

  const handleAddIssue = () => {
    if (issueText !== "") {
      let temp = props.issueArr;
      temp.push(issueText);
      props.setIssueArr(temp);

      localStorage.setItem("issueArr", JSON.stringify(temp));
      setIssueText("");
      props.onHide();
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <textarea
          rows={1}
          type="text"
          className={`${styles2.inputField} col-12 mx-auto mt-3 shadow-sm `}
          placeholder="Enter your issue here ..."
          autoComplete="off"
          id="road"
          value={issueText}
          onChange={(e) => setIssueText(e.target.value)}
          style={{ textIndent: "10px", padding: "10px" }}
        />
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex mx-auto">
          <Button
            className="btn btn-success"
            onClick={() => {
              handleAddIssue();
            }}
          >
            Add
          </Button>
          <Button
            className="btn btn-danger ms-2"
            onClick={() => {
              props.onHide();
              setIssueText("");
            }}
          >
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function CouponModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <textarea
          rows={1}
          type="text"
          className={`${styles2.inputField} col-12 mx-auto mt-3 shadow-sm `}
          placeholder="Enter your coupon code ..."
          autoComplete="off"
          id="road"
          value={props.couponCode}
          onChange={(e) => props.setCouponCode(e.target.value)}
          style={{ textIndent: "10px", padding: "10px" }}
        />
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex mx-auto">
          <Button className="btn btn-success" onClick={() => props.onHide()}>
            Add
          </Button>
          <Button
            className="btn btn-warning ms-2"
            onClick={() => {
              props.onHide();
              props.setCouponCode("");
            }}
          >
            Remove
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

const Cart = () => {
  const router = useRouter();

  const [spares, setSpares] = useState([]);
  const [issueArr, setIssueArr] = useState([]);
  const [issueModalShow, setIssueModalShow] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponModalShow, setCouponModalShow] = useState(false);

  useEffect(() => {
    setSpares(JSON.parse(localStorage.getItem("selectedSpares")));

    if (localStorage.getItem("issueArr")) {
      setIssueArr(JSON.parse(localStorage.getItem("issueArr")));
    }
  }, []);

  const handleRemoveIssue = (selected) => {
    let temp = issueArr;

    temp = temp.filter((curr) => curr !== selected);

    setIssueArr(temp.length === 0 ? [] : temp);
    localStorage.setItem("issueArr", JSON.stringify(temp));
  };

  return (
    <div className="row d-flex flex-column">
      <div className="d-flex align-items-center mx-auto col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-11 border p-3 rounded">
        <div
          className=""
          style={{
            backgroundColor: "lightgrey",
            borderRadius: "50%",
            padding: "15px 10px 10px 10px",
          }}
        >
          <Image
            src="/honda.png"
            alt="logo"
            height="45px"
            width="55px"
            style={{ layout: "fill" }}
          />
        </div>
        <div className="d-flex flex-column ms-2">
          {" "}
          <span className="fw-bold">Honda Civic</span>{" "}
          <span className="text-secondary">Petrol</span>{" "}
        </div>
      </div>
      <div className="mx-auto col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-11 mt-3 border p-3 rounded">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row">
            <span className="fw-bold">1 Service Added</span>
            <span
              className="ms-3 fw-bold text-danger rounded mt-3 mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0"
              style={{ backgroundColor: "rgba(188,84,75,0.3)", padding: "7px" }}
            >
              Service at Garage
            </span>
          </div>
          <div
            className="fw-bold"
            style={{ cursor: "pointer", color: "#0d3b66" }}
          >
            Add more
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <div className="d-flex align-items-center">
            <span>
              <Image
                src="/car.png"
                alt="car"
                height="45px"
                width="55px"
                style={{ layout: "fill" }}
              />
            </span>
            <div
              className="ms-3 d-flex flex-column"
              style={{ position: "relative" }}
            >
              <span className="fw-bold">Complete Car ...</span>
              <span className="my-2">(Fully Synthetic)</span>
              <h4 className="fw-bold text-danger">₹6,986</h4>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    style={{
                      color: "#000",
                      backgroundColor: "#fff",
                      border: "none",
                      fontSize: "18px",
                      marginTop: "-10px",
                      marginLeft: "-10px",
                    }}
                  >
                    Customize
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <div>
            <svg
              style={{
                width: "50px",
                height: "30px",
                color: "grey",
                cursor: "pointer",
              }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15,16H19V18H15V16M15,8H22V10H15V8M15,12H21V14H15V12M3,18A2,2 0 0,0 5,20H11A2,2 0 0,0 13,18V8H3V18M14,5H11L10,4H6L5,5H2V7H14V5Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-11 mx-auto mt-3 border p-3 rounded">
        <div className="mt-3 mx-auto col-12">
          <Accordion>
            <Card style={{ border: "none" }}>
              <Card.Header style={{ backgroundColor: "#fff", border: "none" }}>
                <CustomToggle eventKey="0">Customer Details </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body
                  style={{
                    color: "#5f727f",
                    fontSize: "18px",
                    fontWeight: "400",
                    letterSpacing: "0.2px",
                  }}
                  className="d-flex flex-column"
                >
                  <div className={`${styles.accordion_body_contact} mb-3`}>
                    <div>
                      {" "}
                      <span className="fw-bold">Name :</span> John Smith
                    </div>
                    <div>
                      <span className="fw-bold">Email :</span> john@gmail.com
                    </div>
                  </div>
                  <div className={`${styles.accordion_body_contact} mb-3`}>
                    <div>
                      {" "}
                      <span className="fw-bold">Phone :</span> 1234567899
                    </div>
                    <div>
                      <span className="fw-bold">Alternate Phone :</span>{" "}
                      1234567889
                    </div>
                  </div>
                  <div>
                    <span className="fw-bold">Address :</span> Parking lot no.2,
                    Pune Airport
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <hr />
        </div>
        <div className="mx-auto col-12 ">
          <Accordion>
            <Card style={{ border: "none" }}>
              <Card.Header style={{ backgroundColor: "#fff", border: "none" }}>
                <CustomToggle eventKey="0">Service Details </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                  className="d-flex flex-column align-items-center"
                >
                  <div className={`d-flex flex-wrap ${styles1.commonSpares}`}>
                    {spares.map(
                      (curr, index) =>
                        curr && (
                          <div key={index} className={`${styles1.searchBlob}`}>
                            {curr}
                          </div>
                        )
                    )}
                  </div>
                  <button
                    className="btn btn-warning fw-bold mt-3"
                    onClick={() => router.push("/search")}
                  >
                    Edit
                  </button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <hr />
        </div>
      </div>
      <div className="mt-3 mx-auto col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-11 border p-3 rounded">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">Issues</span>
          <span
            className="fw-bold text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => setIssueModalShow(true)}
          >
            + Add Issues
          </span>
        </div>
        <IssueModal
          show={issueModalShow}
          onHide={() => setIssueModalShow(false)}
          issueArr={issueArr}
          setIssueArr={setIssueArr}
        />
        <div className={`${styles1.commonSpares} d-flex flex-wrap mt-4`}>
          {issueArr.length > 0 ? (
            issueArr.map(
              (curr, index) =>
                curr && (
                  <div
                    key={index}
                    className={`${styles1.searchBlob} ${styles1.selectedBlob} ${styles.issueText}`}
                    onClick={() => handleRemoveIssue(curr)}
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title={curr}
                  >
                    {curr.length > 15 ? curr.substring(0, 15) + "..." : curr}
                    <svg className={styles1.removeCross} viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
                      />
                    </svg>
                  </div>
                )
            )
          ) : (
            <h5 className="text-center mx-auto">No Issues Added</h5>
          )}
        </div>
      </div>
      <div className="mt-3 mx-auto col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-11 border p-3 rounded">
        <h5>COUPONS</h5>
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="mt-3 d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setCouponModalShow(true)}
          >
            <span className="fw-bold">
              <svg
                style={{ width: "25px", height: "25px", color: "limegreen" }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L11.59 21.42A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M13 20L4 11V4H11L20 13M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5Z"
                />
              </svg>
            </span>
            <span className="ms-3 fw-bold">Apply Coupon</span>
          </div>
          <div
            className="fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => setCouponModalShow(true)}
          >
            {couponCode !== "" ? (
              <div>
                {!couponModalShow ? (
                  <span className={`${styles.issueText} rounded`}>
                    {couponCode}
                  </span>
                ) : (
                  <>-</>
                )}
              </div>
            ) : (
              <svg style={{ width: "35px", color: "#000" }} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            )}
          </div>
          <CouponModal
            show={couponModalShow}
            onHide={() => setCouponModalShow(false)}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
          />
        </div>
      </div>
      <div className="mt-3 mx-auto col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-11 border p-3 rounded">
        <h5>PRICE DETAILS (1 service)</h5>
        <div className="d-flex justify-content-between fw-bold mt-3">
          <span>Service Total</span>
          <span>₹6,986</span>
        </div>
        <div className="d-flex justify-content-between fw-bold mt-3">
          <span>Coupon Discount</span>
          <div
            className="fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => setCouponModalShow(true)}
          >
            {couponCode !== "" ? (
              <div>
                {!couponModalShow ? (
                  <span className={`${styles.issueText} rounded`}>
                    {couponCode}
                  </span>
                ) : (
                  <>-</>
                )}
              </div>
            ) : (
              <span
                className="text-danger"
                onClick={() => setCouponModalShow(true)}
              >
                Apply Coupon
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="my-4 mx-auto col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-11 d-flex justify-content-between">
        <Button className="btn btn-warning">Pay Later</Button>
        <Button className="btn btn-success">Pay Now</Button>
      </div>
    </div>
  );
};

export default Cart;