import React from 'react';
import { useProtectPage } from '../../Hooks/useProtectPage'

const AddPostPage = () => {
    useProtectPage()

    return <div>Add New Post Page</div>
}

export default AddPostPage;