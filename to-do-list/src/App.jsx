import Message from "./components/header.jsx"
import "./App.css"
import Task from "./components/tasks.jsx"

function App() {

  return (
    <>
    <div class="container">
      <div className="App">
        <header className="App-header"></header>
        <Message></Message>
        <Task/>
      </div>
    </div>
    </>
  );
}

export default App
