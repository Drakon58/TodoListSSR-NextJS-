import TodoList from '../src/component/TodoList.component';
import NavHeader from '../src/component/nav/NavHeader.component'
import { Todo } from '../src/util/Todo';

import Head from 'next/head'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavHeader />
        <TodoList GetTodo={Todo.GetTodo} RemoveTodo={Todo.RemoveTodo} />
      </div>
    </>
  )
}

export default Index;