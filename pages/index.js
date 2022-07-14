import styles from "../styles/Home.module.css";
import { Row, Col } from "react-bootstrap";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Home({ properties, roomsArray }) {
  // console.log(properties);
  // console.log(roomsArray);

  const roomTypes = [];
  //This loop will extract the name of property and will make it as a key and provide the rooms data
  for (let i = 0; i < properties.length; i++) {
    if (!roomTypes[properties[i].name]) {
      roomTypes[properties[i].name] = JSON.parse(JSON.stringify(properties[i]));
    }
  }
  // console.log(roomTypes);
  // delete roomTypes["Official  Use"];

  let roomsData = [];
  let roomsNamesWithData = {};
  for (let i = 0; i < Object.keys(roomTypes).length; i++) {
    if (!roomsData[Object.keys(roomTypes)[i]]) {
      Object.keys(roomTypes)[i] = [];
      roomsData.push(Object.keys(roomTypes)[i]);
    }
  }

  console.log(roomsData);

  for (let i = 0; i < roomsArray.length; i++) {
    let room = roomsArray[i];
    for (let j = 0; j < room.length; j++) {
      for (let k = 0; k < properties.length; k++) {
        if (properties[k].name == room[j].roomName) {
          room[j]["roomDetail"] = properties[k];
        }
      }
    }
    // console.log(room);
    // for (let l = 0; l < room.length; i++) {
    //   if (room[l].roomName == roomsData[l]) {
    //     roomsNamesWithData[roomsData[l]] = room;
    //   }
    // }
  }

  return (
    <div className={styles.bigContainer}>
      <div className={styles.topContainer}>
        <Row className={styles.upperRow}>
          <Col className={styles.leftArrow}>
            <MdArrowLeft />
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.columnDate}>
            <div className={styles.spanContainer}>
              <span className={styles.spanText}>Thu</span>
              <span className={styles.spanText}>14</span>
              <span className={styles.spanText}>Jul</span>
            </div>
          </Col>
          <Col className={styles.rightArrow}>
            <MdArrowRight />
          </Col>
        </Row>
        <Row className={styles.lowerRow}>
          <Col className={styles.columnContainer}>
            <Col className={styles.imageContainer}>
              <img
                className={styles.image}
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt="Property"
              />
            </Col>
            <Col className={styles.desc}>
              <h5>Get Property</h5>
              <span>
                <Link className={styles.link} href="#">
                  Learn More
                </Link>
              </span>
            </Col>
            <Col className={styles.icon}>
              <BsInfoCircle />
            </Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.price}>12,052</Col>
            <Col className={styles.empty}></Col>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const propertiesResponse = await fetch(
    "https://api.bookonelocal.in/api-bookone/api/property/237/rooms",
    {
      // const propertiesResponse = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForProperty?PropertyId=495', {
      // const response = await fetch('https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForRoom?PropertyId=495&RoomId=1539', {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTc0NDE5MjcsImV4cCI6MTY1Nzg3MzkyN30.BdApPr1hs6DR_NYdR3VWRaan8GQehajWRIPWohSfIT8",
        "Content-Type": "application/x-www-form-urlencoded",
        APP_ID: "BOOKONE_WEB_APP",
      },
    }
  );
  const properties = await propertiesResponse.json();

  //Original One of  Rooms
  const roomsArray = [];
  for (let i = 0; i < properties.length; i++) {
    const roomsResponse = await fetch(
      `https://api.bookonelocal.in/api-bookone/api/availability/getNext7daysRatesAndAvailabilityForRoom?PropertyId=237&RoomId=${properties[i].id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWhhYmlyLmdhbGF4eUBnbWFpbC5jb20iLCJzY29wZXMiOiJST0xFX1BST1BfQURNSU4iLCJpYXQiOjE2NTc0NDE5MjcsImV4cCI6MTY1Nzg3MzkyN30.BdApPr1hs6DR_NYdR3VWRaan8GQehajWRIPWohSfIT8",
          "Content-Type": "application/x-www-form-urlencoded",
          APP_ID: "BOOKONE_WEB_APP",
        },
      }
    );
    const rooms = await roomsResponse.json();
    roomsArray.push(rooms);
  }

  return {
    props: { properties, roomsArray }, // will be passed to the page component as props
  };
}
