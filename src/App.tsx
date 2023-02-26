import React, {useState} from 'react';

import { TasksProvider } from './components/Contexts/TaskContext';
import Tasks from './components/Tasks';
import Popup from './components/Popup';
import CreateTaskContent from './components/Popup/PopupContent/CreateTaskContent';

function App() {
  const [isPoppedUp, setIsPoppedUp] = useState(false);
  const handlePopupClose = () => {setIsPoppedUp(false);}
  const togglePopup = () => { setIsPoppedUp(true);}
  // Remove and change the styles{{}}, these are just temporary to build to row component
  return (
    <TasksProvider>
      <div style={{marginTop: '100px', width: '100%', display: 'flex', justifyContent:'center'}}>
        <button onClick={togglePopup}>Open Popup</button>
        <div style={{width: '50%'}}>
          <Tasks/>
        </div>
        {isPoppedUp?
        <Popup closePopup={handlePopupClose}>
          <CreateTaskContent closePopup={handlePopupClose}/>
        </Popup>
        :null}
      </div>
    </TasksProvider>
  )
}

export default App
