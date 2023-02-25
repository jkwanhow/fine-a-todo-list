import ToDoItem from "./components/ToDoItem"

const tempDescription = 'this is a temporary description for now will delete later';

function App() {

  // Remove and change the styles{{}}, these are just temporary to build to row component
  return (
    <div style={{marginTop: '100px', width: '100%', display: 'flex', justifyContent:'center'}}>
      <div style={{width: '50%'}}>
      <ToDoItem title='example title' details={tempDescription} />
      </div>
    </div>
  )
}

export default App
