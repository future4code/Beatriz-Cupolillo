import React from 'react';
import { useProtectPage } from '../../Hooks/useProtectPage'

const FeedPage = () => {
    useProtectPage()

    return <div>FeedPage</div>
}

export default FeedPage;