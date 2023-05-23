import './App.css';
import { useState } from 'react';

function App() {

      const [name , setName] = useState("")
      const [allData , setAllData] = useState([])


      const handleadd = () =>{

        // console.log(name);

        if(name.trim() !== ""){

          setAllData(perv => [...perv,name])
        }
        setName("")
      }
      // console.log(allData);

      // const handledelete = (index) =>{
      //     allData.splice(index,1)
      //     // const remove =  user.filter(item => item !== user);
      //     // setAllData([...remove]);
      //     setAllData([...allData])
      // }
    
      const handleDelete = (index) => {
        const updatedData = allData.filter((item,id) => id !== index);
        setAllData(updatedData);
      }
      
      
      
  return (
    <div className="App">
    <h1>Todo List</h1>
    <input type="name"  onChange={(e) =>setName(e.target.value)} value={name}/>
    <button onClick={handleadd}>ADD</button>
    {allData.length === 0 ? (
        <div>
          <h3>Empty Data is here</h3>
        </div>
      ) : (
        allData.map((val, i) => (
          <div key={i}>
            <h3>{val}</h3>
            <button>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))
      )}

    </div>
  );
}

export default App;
