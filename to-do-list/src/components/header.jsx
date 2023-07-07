import "./header.css"

export default function toDo(){
    const to = "to."; 
    const du = "do";

    return(    
    <div class="header">
        <div class = "texto">
            <span className = "to">{to}</span>
            <span className = "du">{du}</span>
        </div>
    </div>
    )
}

