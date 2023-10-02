import {React,useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addToHandler = (e)=>{
        e.preventDefault();

        dispatch(addTodo(input))
    }
  return (
    <form onSubmit={addToHandler} className='space-x-3 mt-12'>
          
          <input type="text" className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus: ring-indigo-900 text-base outline-900 text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Enter a todo...' value={input} onChange={(e)=>setInput(e.target.value)} />
    <button className="">Submit</button>
    </form>
  )
}

export default AddTodo
