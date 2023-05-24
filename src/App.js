
import './App.css';
import { useEffect, useState } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import CountDown from './views/CountDown';
import ErrorPage from "./views/ErrorPage";
import Layout from './views/Layout';
import {   
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Header from './views/Layout';
const App = () => {
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
    let newTodo = {
      id: `'${Math.floor((Math.random() * 100000) + 1)}'`, 
      title: address, 
      type:'Nathan'
    };
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
  const onTimesUp = () => {
    alert('Times up')
  }
  return (
    <div className="App">

      {/* <RouterProvider router={router} />   */}
      <BrowserRouter>
      <Routes>
        {/* 1️⃣ Wrap your routes in a pathless layout route */}
        <Route element={<Layout />}>
          <Route path="/" element={<Covid />} errorElement={<ErrorPage />}/>
          <Route path="/timer/*" element={<CountDown onTimesUp={onTimesUp}/>} errorElement={<ErrorPage />}/>
          <Route path="/todo/*" 
            element={
            <>
              <Todo 
              data = {todos}
              title = {'All todos'}
              deleteDataTodo = {deleteDataTodo}
              />
              <span>
              <input type='text' value={address} onChange={(e)=>handleOnchangeInput(e)}></input>
              <button type='button' onClick={(e)=>handleEventClick(e)}>Click me</button>
              </span>
            </>} 
            errorElement={<ErrorPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
