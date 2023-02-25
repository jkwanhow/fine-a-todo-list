import ToDoItem from "./components/ToDoItem"


function App() {

  // Remove and change the styles{{}}, these are just temporary to build to row component
  return (
    <div style={{marginTop: '100px', width: '100%', display: 'flex', justifyContent:'center'}}>
      <div style={{width: '50%'}}>
      <ToDoItem />
      </div>
    </div>
  )
}

export default App
