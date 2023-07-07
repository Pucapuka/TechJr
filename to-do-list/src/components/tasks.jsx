import "./header.css";

function addTask(t){
    let list = {};
    list.pull(t);
}

export default
function task(){
   return( 
   
        <div class = "box">
            <text>Minhas tasks</text>
            <input type = "text" placeholder="Adicionar novo todo" class="task-list"></input>
            <button type="image" class='check' onclick = "addTask(text.getText())">√</button>
       
        </div>
   )
}