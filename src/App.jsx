import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useState } from 'react';

function App() {
  const [text , setText] = useState("")
  const [list , setList] = useState([])

 let add = () => {
    list.push(text)
    setList([...list])
  }

 let DeleteAll = () => {
  setText([])
 }

 let Delete = () => {
  list.pop(text)
  setText([...list])
 }

let editBtn = () => {
  let updateVal = prompt("Enter The Updated Value")
  list.pop(text)
  list.push(updateVal)
  setList([...list])
}

  return (
    <div className='container text-center mt-5 pt-5 pb-3 main '>
      <div>
        <div>
          <div>
             <input type="text" 
             className='input mx-1 py-1'
              onChange={(e) => {
                setText(e.target.value)
              }} 
              />
             <button className='mx-1 btn1 ' onClick={(add)}>Add</button> 
             <button className='mx-1 btn1 ' onClick={(DeleteAll)}>Delete All</button>
          </div>
        </div>

        {list.map((x, i) =>(
         <div className='container '>
          <div className='row mt-3'>
            <div className=' col-md-6 col-6 text-start'>
              <p className='' key={i}>{x}</p>
            </div>

            <div className=' col-md-6 col-6 text-end'>
              <button className='mx-1 btn2' onClick={(editBtn)}>Edit</button>
              <button className='mx-1 btn2' onClick={(Delete)}>Delete</button>
            </div>
          </div>
         </div>
        ))}
      </div>
    </div>
  )
}

export default App;
