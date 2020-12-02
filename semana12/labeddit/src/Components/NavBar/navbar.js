import React from 'react'
import { useProtectPage, useUnprotectPage } from '../../Hooks/useUnprotectedPage';

const FeedPage = () => {
    useUnprotectPage()

    return <div>Feed Page</div>
}

export default FeedPage;