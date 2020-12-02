import React from 'react';
import { useProtectPage } from '../../Hooks/useProtectedPage'

const AddPostPage = () => {
    useProtectPage()

    return <div>Add New Post Page</div>
}

export default AddPostPage;