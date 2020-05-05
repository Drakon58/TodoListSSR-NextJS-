import Link from 'next/link';

import { Test } from '../src/util/Test';

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
        <ul>
          {
            props.shows.map(show => (
              <li key={show.id}>
                <Link href="/edit/[id]" as={`/edit/${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

Index.getInitialProps = async () => {
  let entries = await Test.GetTVAmaze();

  return {
    shows: entries.map(entry => entry.show)
  };
}

export default Index;