import {React, useState, useEffect}  from "react";
import { useHistory, useParams } from "react-router-dom";
import { useProtectPage } from '../../Hooks/useProtectPage'
import { goToFeed } from '../../Routes/Coordinator'
import { BASE_URL } from '../../Constants/apiContant'
import { PostContainer } from "./styled"
import { Typography } from '@material-ui/core';
import { useRequestData } from "../../Hooks/useRequestData";
import PostCard from "../../Components/PostCard/PostCard";

function PostDetails () {
    useProtectPage()
    const history = useHistory()
    const params = useParams()
    const data = useRequestData(`${BASE_URL}/posts/${params.id}` ,[])
    const detailPost = data[0]

      return (
        <PostContainer>
            {detailPost && <PostCard>
                <Typography variant="h5" color="primary" align="center">
                    {detailPost.post.username}
                </Typography>
                <Typography variant="h5" color="primary" align="center">
                    {detailPost.post.title}
                </Typography>
                <Typography align="center">
                    {detailPost.post.text}
                </Typography>
                <Typography align="center">
                    {detailPost.post.votesCount}
                </Typography>
            </PostCard>}
        </PostContainer>
      )
}

export default PostDetails
