import React, { useState } from 'react'


function App() {

  const inputArr = [
    {
      type: 'text', 
      id: 1,
      value: ''
    }
  ]
  
  const [arr, setArr] = useState(inputArr);
  const [name, setName] = useState('')

  
  const addInput = () => {
    setArr(s => {
      return [
        ...s, 
        {
          type: 'text', 
          value: ''
        }
      ]
    })
  }
  const deleteInput = () => {
    setArr(arr.slice(0, -1))
  }

  const submitInput = () =>{
    alert(`${inputArr.value} submittted`)
  }

  const handleChange = (e) => {
    e.preventDefault()

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice()
      newArr[index].value = e.target.value;
      return newArr
    })
  }
  
  return (
    <div>
    <div className="App">
      <label>Name</label>
      <input type='text' value= {name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div>
    {arr.map((item, i) => {
        return(
          <div>
          <label>Project{i+1}</label>
          <input 
          onChange={handleChange}
          value={item.value}
          id={i}
          type={item.type}
          size='4'
          />
          </div>
        )
      })}
    </div>
    <div className='btn'>
      <button onClick={deleteInput}>Delete</button>
      <button onClick={addInput}>Add</button>  
      <button onClick={submitInput}>Submit</button>
    </div>
    </div>
  );
}

export default App;
