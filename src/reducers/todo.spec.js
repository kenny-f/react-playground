import todos from './todo';
import deepFreeze from 'deep-freeze';

it('todo reducer', () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: false,
    },
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1,
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  const nextState = todos(stateBefore, action);
  nextState.should.deep.equal(stateAfter);
});
