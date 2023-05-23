import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';
const App = () => {
  let [name, setName] = useState('Nathan');
  const [address, setAddress]=useState('');
  const [todos, setTodos]= useState([ 
  {id: 'Todo1', title:"Doing homework"},
  {id: 'Todo2', title:"Testing Polistic"},
  {id: 'Todo3', title:"Watching youtube"}
  ]);
  const handleEventClick =(e) => {
    if(!address){
      alert('Input is empty!')
      return;
    }
    // console.log('>>>Check Address: ',address);
    // setName(address);
    let newTodo = {id:"abc", title: address};
    //hook not merge state
    setTodos([...todos, newTodo]);
    setAddress('');
  }
  const handleOnchangeInput= (e) => {
    setAddress(e.target.value);
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
        <Todo
          data={todos}
          title={'All todos'}
        />
        <input type="text" value={address} onChange={(e)=>handleOnchangeInput(e)}/>
        <button type="button" onClick={(e)=>handleEventClick(e)}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
