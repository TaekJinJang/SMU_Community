import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import Header from '../Common/Header';
import AddBoard from './Section/AddBoard';
import AddComment from './Section/AddComment';
import CommentInput from './Section/CommentInput';
import CheckNickname from './Section/CheckNickname';

const CommentForm = styled.form`
    position: relative;
    background-color: #fafafa;
    margin: 0px -1px;
    box-sizing: border-box;
`;

const BackButton = styled.div`
    background-color: #c62917;
    color: #fff;
    width: 100%;
    height: 40px;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    margin: 12px 0px;
`;

function BoardDetail(props) {
    const BoardId = props.match.params.id;
    const userFrom = localStorage.getItem('userId');
    const writerFrom = localStorage.getItem('userNickname');
    const [Comments, setComments] = useState([]);
    const [BoardDetail, setBoardDetail] = useState([]);
    const [BoardWriter, setBoardWriter] = useState("익명");
    const [WriterIcon, setWriterIcon] = useState(true);
    const [Value, setValue] = useState("");

    let variables = {
        userFrom: userFrom,
        boardFrom: BoardId,
        commentContent: Value,
        commentWriter: BoardWriter,
    }

    useEffect(() => {
        const variable = { boardId : BoardId };
        axios.post(`${props.match.path}`, variable)
            .then(response => {
                console.log(response.data);
                if(response.data.success) {
                    setBoardDetail([response.data.board]);
                } else {
                    alert("게시글 가져오기에 실패했습니다.")
                }
            })
        FetchComment();
    }, []);

    const FetchComment = () => {
        axios.post("/comment/getComment", variables)
          .then((response) => {
            console.log("Get Comment : ",response);
            if(response.data.success) {
              setComments(response.data.comments);
            } else {
              alert("댓글을 보여줄 수 없습니다.");
            }
          })
    }

    const onIconClick = () => {
        if(WriterIcon){
          setWriterIcon(false);
          setBoardWriter(writerFrom);
        } else {
          setWriterIcon(true);
          setBoardWriter("익명");
        };
    }

    const onChange = (e) => {
        setValue(e.currentTarget.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('/comment/upload', variables)
            .then(response => {
                alert("댓글이 등록되었습니다.");
                setValue("");
                FetchComment();
            })
    }
    
    return (
        <div>
            <Header title="자유게시판" link="/board"/>
            { BoardDetail && BoardDetail.map((board, index) => {
            // console.log('board',board)
            return(
                <React.Fragment key={index}>
                    <AddBoard
                        id={board._id}
                        user={board.userFrom}
                        time={board.createdAt}
                        writer={board.boardWriter}
                        title={board.boardTitle}
                        content={board.boardContent}
                    />
                </React.Fragment>
            )})
            }
            <CommentForm onSubmit={onSubmit}>
                <CommentInput
                    name="Comment"
                    placeholder="댓글을 작성해주세요."
                    value={Value}
                    onChange={onChange}
                />
                <CheckNickname 
                    left="284px"
                    icon={WriterIcon}
                    click={onIconClick} 
                    submit={onSubmit}
                />
            </CommentForm>
            { Comments && Comments.map((comment, index) => {
            // console.log('comment',comment)
            return(
                <React.Fragment key={index}>
                    <AddComment
                        id={comment._id}
                        time={comment.createdAt}
                        writer={comment.commentWriter}
                        content={comment.commentContent}
                    />
                </React.Fragment>
            )})
            }
            <Link to="/board">
                <BackButton> 글 목록으로 돌아가기 </BackButton>
            </Link>
        </div>
    )
}

export default withRouter(BoardDetail);
