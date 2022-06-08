import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Image1 from "../assets/mainImage1.png";
import Image2 from "../assets/mainImage2.png";
import Image3 from "../assets/mainImage3.png";
import poster1 from "../assets/poster1.jpg";
import poster3 from "../assets/poster3.jpg";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import MainBoard from "../components/Board/BoardDetail";
import LogoutButton from "../components/Common/LogoutButton";
// import meetingBoard from "../components/Board/MeetingBoardView";
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
//
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
    <>
      {" "}
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
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://setopia.semyung.ac.kr/program/board/boardList.jsp?menuID=001001001001&boardTypeID=2"
                  className="px-2 mt-2"
                >
                  공지사항
                </a>
                <Nav.Link className="px-2" href="#action2">
                  건의사항
                </Nav.Link>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://www.semyung.ac.kr/scs.do"
                  className="px-2 mt-2"
                >
                  학부 이모저모
                </a>

                <NavDropdown
                  title="게시판"
                  id="navbarScrollingDropdown"
                  className="px-2"
                >
                  <NavDropdown.Item href="/informationSHareBoard">
                    정보공유게시판
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/meetingBoard">
                    구인게시판
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/projectBoard">
                    자랑게시판
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/board">자유게시판</NavDropdown.Item>
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

        <Carousel fade style={{ marginBottom: "100px" }}>
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
              src={Image2}
              width="100%"
              height="700rem"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>컴퓨터학부에서 당신의 꿈을 코딩하세요.</h3>
              <p>세명대학교 컴퓨터학부</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image3}
              width="100%"
              height="700rem"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>충북바이오헬스 캡스톤디자인 우수상</h3>
              <p>세명대학교 ICES Lab.(지도교수: 인치호 교수)</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* 여기부터 시작 */}

        <div className="row mt-3 mb-3">
          <div className="card col-7">
            <div className="card-row flip-box">
              {
                <div className="flip">
                  <div className="front1">
                    <div className="card-font">
                      선･후배간 소통으로
                      <br />
                      다양한 정보를 얻고싶다면?
                    </div>
                  </div>
                  <div
                    className="back1"
                    onClick={() => {
                      props.history.push("/informationSHareBoard");
                    }}
                  >
                    <div className="card-font">
                      정보 공유
                      <br />
                      바로가기
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="card-row flip-box">
              {
                <div className="flip">
                  <div className="front2">
                    <div className="card-font">
                      팀 프로젝트 하면서 코딩실력을 쌓고 싶은데
                      <br />
                      인원이 부족하다구요?
                    </div>
                  </div>
                  <div
                    className="back2"
                    onClick={() => {
                      props.history.push("/meetingBoard");
                    }}
                  >
                    <div className="card-font">
                      구인게시판
                      <br />
                      바로가기
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="card-row flip-box">
              {
                <div className="flip">
                  <div className="front3">
                    <div className="card-font">
                      내가 만든 개인/팀 프로젝트를
                      <br />
                      학부생 친구들에게 공유하고싶다면?
                    </div>
                  </div>
                  <div
                    className="back3"
                    onClick={() => {
                      props.history.push("/projectBoard");
                    }}
                  >
                    <div className="card-font">
                      자랑게시판
                      <br />
                      바로가기
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
          <span className="poster col-5">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={poster1} />
                <Carousel.Caption>
                  <h3>ICES Lab</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={poster3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>두번째</h3>
                  <p>두번째</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={poster3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>학생회 모집</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </span>
        </div>
      </Container>
      <footer></footer>
    </>
  );
}
export default withRouter(BoardViews);
