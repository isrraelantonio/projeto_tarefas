import React, {useState, useEffect} from "react";
import './TudoList.css';
import Icone from './assets/tarefa.png'

function TudoList() {

    const listaStorage = localStorage.getItem('Lista')
    const[lista, setlista] = useState(/*listaStorage ? JSON.parse(listaStorage): */[]);
    const[novoItem, setNovoItem] = useState("");

    /*;
    

    useEffect(() => {
        localStorage.setItem('Lista', JSON.stringify(lista))},[lista]
    );,*/

    function adicionaItem(form) {
        form.preventDefault();
        if (!novoItem){
            rturn;
        }
        setlista([...lista, {text: novoItem, isCompleted: false}])
        setNovoItem("");
        document.getElementById('input-entrada').focus();

    }

    function clicou(index){
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setlista(listaAux);
    }

    function deleta(index){
        const listaAux = [...lista];
        listaAux.splice(index,1);
        setlista(listaAux);
    }

    function deletaTudo(){
        
        setlista([]);
    }

    return (
        <div>
            <h1> Lista de Tarefas</h1>
            <form action="" onSubmit={adicionaItem}>
                <input
                id="input-entrada"
                type="text" 
                value={novoItem}
                onChange={(e) => {setNovoItem(e.target.value)}}
                placeholder="Adicione uma tarefa" 
                />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div style={{textAlign: "center"}}>
                    {
                        lista.length < 1
                        ?
                        <img src={Icone} alt="" />
                        :
                        lista.map((item, index) =>( 

                        <div
                            key={index}
                            className= {item.isCompleted ? "item completo" : "item"}>
                            <span onClick={()=> {clicou(index)}}>{item.text}</span>
                            <button  onClick={()=> {deleta(index)}} className="del">deletar</button>
                        </div>

                        ))
                       
                    }
                    {
                        lista.length > 0 &&
                         <div>
                        
                        <button  onClick={()=> {deletaTudo()}} className="deleteAll">Deletar todos</button>
                         </div>
                    }
                   
                </div>
            </div>

        </div>
        
      
    )
}


export  default TudoList