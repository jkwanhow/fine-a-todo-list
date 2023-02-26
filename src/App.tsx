import React, {useState} from 'react';

import { TasksProvider } from './contexts/TaskContext';
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
      <div style={{marginTop: '100px', width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', gap: '20px'}}>
        <div style={{width: '50%'}}>
          <Tasks/>
        </div>
        <button className='add-task-button' onClick={togglePopup}>Add a task</button>
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
