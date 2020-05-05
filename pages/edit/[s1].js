import React from 'react';
import { useRouter } from 'next/router'
import NavHeader from '../../src/component/nav/NavHeader.component'
import EditTodo from '../../src/component/EditTodo.component'

const Edit = () => {
    let router = useRouter();
    const { s1 } = router.query
    console.log(s1)
    return (
        <>
            <NavHeader />
            <EditTodo todoID={s1}/>
        </>
    );
}

export default Edit;