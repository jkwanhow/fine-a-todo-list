import React from 'react';
import Tasks from './components/Tasks';
const tempTasks = [
{
  title: 'example title',
  details: 'this is a temporary description for now will delete later',
  complete: false,
},
{
  title: 'Eat Food',
  details: 'temp description two',
  complete: false
},
]
function App() {

  // Remove and change the styles{{}}, these are just temporary to build to row component
  return (
    <div style={{marginTop: '100px', width: '100%', display: 'flex', justifyContent:'center'}}>
      <div style={{width: '50%'}}>
        <Tasks tasks={tempTasks}/>
      </div>
    </div>
  )
}

export default App
