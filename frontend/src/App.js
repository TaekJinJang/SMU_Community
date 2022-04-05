import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AnonymousBoard from "./pages/Board";
import meetingBoard from "./components/Board/MeetingBoardView";
import BoardDetail from "./components/Board/BoardDetail";
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
          <Route path="/mypage" component={Auth(MyPage, true)} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
