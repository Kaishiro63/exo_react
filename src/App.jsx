import { useState } from 'react'
import './App.css'

const STATE = {
  TODO: 'TODO',
  DONE: 'DONE'
}

function App() {

  const [form, setForm] = useState({
    todo: ''
  });

  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault()

    setTodos([
      ...todos,
      {
        name: form.todo,
        state: STATE.TODO,
      }
    ]);

    setForm({
      ...form,
      todo: ''
    });

  }

  function handleChange(event) {

    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

    console.log(todos);

  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input type="text" name='todo' onChange={handleChange} value={form.todo}/>
        <button type="submit">Ajouter</button>
      </form>

      <h2>A faire</h2>

      <ul>
        {
          todos
          .filter(function(item) {
            return item.state === STATE.TODO;
          })
          .map(function(item) {
            return <li key={item.name}>
              {item.name}
              </li>
          })
        }
      </ul>

      <h2>Fait</h2>

      <ul>
        {
          todos
          .filter(function(item) {
            return item.state === STATE.DONE;
          })
          .map(function(item) {
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul>

    </div>

  )
}

export default App