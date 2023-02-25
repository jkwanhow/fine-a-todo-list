import React, {useState} from 'react';
import Tasks from './components/Tasks';
import Popup from './components/Popup';
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
  const [isPoppedUp, setIsPoppedUp] = useState(false);
  const handlePopupClose = () => {setIsPoppedUp(false);}
  const togglePopup = () => { setIsPoppedUp(true);}
  // Remove and change the styles{{}}, these are just temporary to build to row component
  return (
    <div style={{marginTop: '100px', width: '100%', display: 'flex', justifyContent:'center'}}>
      <button onClick={togglePopup}>Open Popup</button>
      <div style={{width: '50%'}}>
        <Tasks tasks={tempTasks}/>
      </div>
      {isPoppedUp?
      <Popup closePopup={handlePopupClose}>
        <div>example</div>
      </Popup>
      :null}
    </div>
  )
}

export default App
