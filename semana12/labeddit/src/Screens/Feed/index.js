import React from 'react';
import { useProtectPage } from '../../Hooks/useProtectPage'
import { useRequestData } from '../../Hooks/useRequestData'
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../Constants/apiContant'
import { FeedPageContainer } from './styled'
import { PostCard } from '../../Constants/PostCard'



const FeedPage = () => {
    useProtectPage()
    const history = useHistory()
    const posts = useRequestData(`${BASE_URL}/posts`, [])


    return (
        <FeedPageContainer>
            {posts.map(post => {
                return <PostCard 
                key={post.id}
                title={post.title}
                username={post.username}
                text={post.text}
                commentsCount={post.commentsCount}
                votesCount={post.votesCount}
                direction={post.userVoteDirection}
                />
            })}
            {/* <FabStyled color="primary" onClick={() => goToAddPost(history)}>
                +
            </FabStyled> */}
        </FeedPageContainer>
    )
}

export default FeedPage;