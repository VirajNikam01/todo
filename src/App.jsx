import { useState } from 'react'

function App() {

  const[task, setTask] = useState("")
  const[desc, setDesc] = useState("")

  const[show, setShow] = useState([])
  
  const clickHandler = (e)=>{
      e.preventDefault()
      setShow([...show, {task,desc}])
      console.log(show);
      setTask("")
      setDesc("")

  }


  let renderTask = <h2>No Task Available</h2>

if (show.length>0) {
  renderTask = show.map((t,i)=>{

    return(
      <ul className=' m-2'>
        <div className='flex items-center justify-between bg-white mt-2 px-5 py-1 rounded'>
        <h5 className='text-xl font-semibold'>{t.task}</h5>
        <li className='text-l ml-6'>{t.desc}</li>
        </div>
      </ul>
    )
  })
}

  return (
    <>
    <header className='min-w-full bg-black h-24 flex items-center justify-center'>
      <h2 className='text-white text-4xl font-bold'>Todo Application</h2>
    </header>


    <form className='flex flex-col gap-10 m-20 items-center justify-center border-b-2'>

    <input
    value={task}
    onChange={(e)=>setTask(e.target.value)}
     className='border-2 border-slate-900 rounded w-full md:w-1/2 px-1 py-2 text-xl font-bold' 
     type="text" 
     placeholder='Enter task' 
     />
     
    <input 
    value={desc}
    onChange={(e)=>setDesc(e.target.value)}
    className='border-2 border-slate-900 rounded w-full md:w-1/2 px-1 py-2 text-xl font-bold' 
    type="text" 
    placeholder='describle task' 
    />

    <button
    onClick={clickHandler}
     className='bg-slate-600 text-white rounded font-bold px-5 py-2 mb-10 text-2xl'>Add Task</button>

    </form>


      <div className='p-8 bg-slate-500 text-center text-xl' >
          <ul>
            {renderTask}
          </ul>
      </div>

    </>
  )
}

export default App
