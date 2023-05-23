import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useEffect, useState } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
const App = () => {
  let [name, setName] = useState('Nathan');
  const [address, setAddress]=useState('');
  const [todos, setTodos]= useState([ 
  {id: 'Todo1', title:"Doing homework", type:'Nathan'},
  {id: 'Todo2', title:"Testing Polistic", type:'Nathan'},
  {id: 'Todo3', title:"Watching youtube", type:'Hannah'},
  {id: 'Todo4', title:"Learning English", type:'Hannah'}

  ]);
  // run after ui is re-rendered
  useEffect(()=>{
    console.log('run useEffect')
  },[address])
  // Chỉ khi nào Address thay đổi mới thực thi lệnh trong useEffect
  useEffect(()=>{
    console.log('run useEffect todos')
  },[todos])

  const handleEventClick =(e) => {
    if(!address){
      alert('Input is empty!')
      return;
    }
    let newTodo = {id:"abc", title: address, type:'Nathan'};
    //hook not merge state
    setTodos([...todos, newTodo]);
    setAddress('');
  }
  const handleOnchangeInput= (e) => {
    setAddress(e.target.value);
  }
  const deleteDataTodo = (id) => {
    let curTodos = todos;
    curTodos = curTodos.filter(item => item.id!==id)
    setTodos(curTodos)
  }
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
      <Covid />
      </header>
    </div>
  );
}

export default App;
