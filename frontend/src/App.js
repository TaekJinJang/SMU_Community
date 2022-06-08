import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AnonymousBoard from "./pages/Board";
import meetingBoard from "./components/Board/MeetingBoardView";
import informationShareBoard from "./components/Board/InformationShareBoard";
import projectBoard from "./components/Board/ProjectBoardView";
import BoardDetail from "./components/Board/BoardDetail";
import BoardDetailNickname from "./components/Board/BoardDetailNickname";
import MyPage from "./pages/MyPage";
import Auth from "./hoc/auth";
import MainPage from "./pages/MainPage";

const Container = styled.div`
  margin: 10px auto;
  // width: 370px;
`;

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth(Login, false)}></Route>
          <Route path="/board-" component={MainPage} />
          <Route path="/register" component={Auth(Register, false)} />

          <Route path="/board" component={Auth(AnonymousBoard, true)} />
          <Route path="/board/:boardId" component={Auth(BoardDetail, true)} />
          <Route path="/meetingBoard" component={Auth(meetingBoard, true)} />
          <Route path="/projectBoard" component={Auth(projectBoard, true)} />
          <Route
            path="/informationShareBoard"
            component={Auth(informationShareBoard, true)}
          />
          <Route path="/mypage" component={Auth(MyPage, true)} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
