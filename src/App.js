import Todo from './components/Todo.js';


function App() {
  return (
    <div id='main-container'>
      <div id='todos-container'>
        <h1>My Todos</h1>
        <Todo text='Learn JavaScript' />
        <Todo text='Practice Coding Exercise' />
        <Todo text='Master JavaScript' />
      </div>
      <div className='meetup-container'>
        <h1>Meetup Scheduler</h1>
      </div>
    </div>
  );
}

export default App;
