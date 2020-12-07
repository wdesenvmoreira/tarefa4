import React , { useState, useEffect } from 'react'

function Tarefas(props) {

    // const numbers = ['Tarefa1', 'Tarefa 2', 'Tarefa3'];
    let [listItems, setlistItems] = useState([])
    const [numbers, setNumbers] = useState([])

    useEffect(()=>{
      //  removerlista()
        let item = setar()
       setlistItems(item)
    },[numbers])

    useEffect(()=>{
       
    },[listItems])

    function preencher(){
        console.log('preenchendo')
         let item = setar()
       setlistItems(item)
    }

    function setar(){
        let item =  numbers.map((number) =>
        <li key={numbers.indexOf(number)}> 
         <input type='text'  value={number}/><a id={numbers.indexOf(number)} onClick={() => removerItem(numbers.indexOf(number))}>X</a>
        </li>) 
        return item
    }

    function incluir (event){
       // removerlista()
        numbers.push(event.target.value);
        console.log('inclui',numbers)
         preencher()
        event.target.value = ''
        event.preventDefault();
    }

    function removerItem(id){
      
        numbers.splice(id,1)
        preencher()
    }

    const removerlista = () => {
        const nodes = document.getElementById('lista');
        while (nodes.firstChild) {
          nodes.removeChild(nodes.firstChild);
        }
      };


   
    return (
        <div>
                <h2>Tarefa 4 - Lista de Tarefas </h2>
              <ul id='lista'>
                  {listItems}
                  <li><input type='text' id='novaTarefa' onBlur={incluir} /></li>
              </ul>
              
      </div>
    );
  }
  
  

  export default Tarefas;