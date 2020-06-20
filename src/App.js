import React, { useState } from "react";
import TodoList from "./TodoList";
import "./Style.css";

function App(){

  const [inputList,setinputList]=useState("");
  
  const [items,setItems] = useState([]);

  const itemEvent = (event) => {
      setinputList(event.target.value);
  };

  const listOfitem = () => {
       setItems((oldItems) =>{
           return [...oldItems,inputList];
       }
       );
       setinputList("");
  };
  
  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
        return oldItems.filter((arrElem,index) => {
            return index !== id;
        })
    })

}

    return(
        <div className="main_div">
           <div className="center_div">
               <h1> ToDo List</h1>
               <br/>
               <input type="text" placeholder="Add a Items" 
                  onChange={itemEvent} value={inputList}/>
               <button onClick={listOfitem}> + </button>

               <ol>
                   {/* <li> {inputList} </li> */}
                   {items.map( (itemnal , index) => {
                      return( <TodoList key={index}
                        id={index}
                        text={itemnal}
                        onSelect = {deleteItems}
                        />)
                   } )}
               </ol>
           </div>
        </div>
    )
}

export default App;
