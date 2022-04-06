import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Image1 from "../assets/mainImage1.png";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import MainBoard from "../components/Board/BoardDetail";
import LogoutButton from "../components/Common/LogoutButton";
import meetingBoard from "../components/Board/MeetingBoardView";
import "../components/Board/Mainpage.css";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Carousel,
} from "react-bootstrap";
import BoardView from "../components/Board/BoardView";

const HeaderTitle = styled.span`
  color: #454545;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  line-height: 56px;
  padding-left: 8px;
`;
const Logo = styled.img`
  width: 30px;
  height: 32px;
  vertical-align: middle;
  cursor: pointer;
`;
const BoardCard = styled.span`
  width : 100px
  height : 200px
  font-size : 100px
  border 1px solid #000
`;
function BoardViews(props, { history }) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("login") === null) {
      setLogin(false);
    } else {
      setLogin(true);
      console.log(login);
    }
  }, []);
  console.log(login);
  return (
    <Container>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Link to={props.link}>
            <Logo src={logo} alt="logo" />
          </Link>
          <HeaderTitle>SM UCC</HeaderTitle>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 px-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="px-2">
                <a target="_blank" href="www.naver.com" className="px-2">
                  공지사항
                </a>
              </Nav.Link>
              <Nav.Link className="px-2" href="#action2">
                건의사항
              </Nav.Link>
              <Nav.Link className="px-2" href="#action2">
                학부 이모저모
              </Nav.Link>

              <NavDropdown
                title="게시판"
                id="navbarScrollingDropdown"
                className="px-2"
              >
                <NavDropdown.Item href="/board">자유게시판</NavDropdown.Item>
                <NavDropdown.Item href="/meetingBoard">
                  구인게시판
                </NavDropdown.Item>
                <NavDropdown.Item href="/projectBoard">
                  자랑게시판
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">고민중</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              {login ? (
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    window.localStorage.removeItem("login");
                    window.localStorage.removeItem("userId");
                  }}
                >
                  <LogoutButton />
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline-primary mx-3"
                    onClick={() => {
                      props.history.push("./board");
                    }}
                  >
                    로그인
                  </Button>
                  <Button
                    variant="outline-success"
                    onClick={() => {
                      props.history.push("/register");
                    }}
                  >
                    회원가입
                  </Button>{" "}
                </>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-flex"
            src={Image1}
            width="100%"
            height="700rem"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>세명대학교</h3>
            <p>컴퓨터학부만을 위한 커뮤니티입니다.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            width="100%"
            height="700rem"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            width="100%"
            height="700rem"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* 여기부터 시작 */}
      <div className="row">
        <div className="card col-7">
          <div className="card-row">asd{meetingBoard}</div>
          <div className="card-row">asdasd</div>
          <div className="card-row">asdasd</div>
        </div>
        <span className="poster col-5">
          <Carousel>
            <Carousel.Item>
              <img className="d-block" src={Image1} />
              <Carousel.Caption>
                <h3>첫번째</h3>
                <p>첫번째</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={Image1} alt="Second slide" />

              <Carousel.Caption>
                <h3>두번째</h3>
                <p>두번째</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={Image1} alt="Third slide" />

              <Carousel.Caption>
                <h3>세번째</h3>
                <p>세번쨰</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </span>
      </div>
    </Container>
  );
}
export default withRouter(BoardViews);
