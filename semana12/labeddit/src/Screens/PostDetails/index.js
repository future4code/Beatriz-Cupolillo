import {React, useState, useEffect}  from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectPage } from '../../Hooks/useProtectPage'
import { goToFeed } from '../../Routes/Coordinator'
import { BASE_URL } from '../../Constants/apiContant'
import { PostContainer } from "./styled"

function PostDetails () {
    const history = useHistory()
    useProtectPage()
    const params = useParams()
    const [details, setDetails] = useState([])


    const getPostDetails = () => {
        axios
          .get(`${BASE_URL}/posts/${params.id}`, {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            setDetails(res.data.post);
          })
    
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        getPostDetails();
      }, [details]);


      return (
        <PostContainer>
      <button onClick={() => goToFeed(history)}> Feed </button>
      <div>
        <div>
          <div>
            <h3>{details.username}</h3>
            <h1>{details.title}</h1>
            <p>{details.text}</p>
          </div>
            id={details.id}
        </div>
        <div>
          {details.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            details.comments.map((comment) => {
              return (
                <div
                  id={comment.id}
                  text={comment.text}
                  username={comment.username}
                  userVoteDirection={comment.userVoteDirection}
                  votesCount={comment.votesCount}
                  commentId={comment.id}
                  postId={params.id}
                />
              );
            })
          )}
        </div>
      </div>
        </PostContainer>
      )
}

export default PostDetails
