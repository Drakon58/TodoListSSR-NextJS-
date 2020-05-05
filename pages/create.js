import NavHeader from '../src/component/nav/NavHeader.component'
import CreateTodo from '../src/component/CreateTodo.component';

import { Todo } from '../src/util/Todo';

import Head from 'next/head'

const Create = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <NavHeader />
                <CreateTodo CreateTodo={Todo.CreateTodo}/>
            </div>
        </>
    )
}

export default Create;