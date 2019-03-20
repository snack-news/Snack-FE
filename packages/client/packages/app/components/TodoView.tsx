import { observer } from 'mobx-react';
import * as React from 'react';
import DevTools from 'mobx-react-devtools';
import Todo from '../store/Todo';

export interface Props {
  todo: Todo;
}

const TodoView = observer<React.FunctionComponent<Props>>(({ todo }) => (
  <li>
    <DevTools />
    <input
      type="checkbox"
      defaultChecked={todo.finished}
      onClick={() => {
        todo.toggleFinished();
      }}
    />
    {todo.title}
  </li>
));

export default TodoView;
