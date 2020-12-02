import React from 'react';
import { useProtectPage } from '../../Hooks/useProtectPage'

const FeedPage = () => {
    useProtectPage()

    return <div>FeedPage - As noticias aparecerao aqui</div>
}

export default FeedPage;