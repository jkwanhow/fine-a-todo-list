import React, {useState} from 'react';

import { TasksProvider, useTasks } from './components/Contexts/TaskContext';
import Tasks from './components/Tasks';
import Popup from './components/Popup';
import CreateTaskContent from './components/Popup/PopupContent/CreateTaskContent';

function App() {
  const tasks = useTasks();


  const [isPoppedUp, setIsPoppedUp] = useState(false);
  const handlePopupClose = () => {setIsPoppedUp(false);}
  const togglePopup = () => { setIsPoppedUp(true);}
  // Remove and change the styles{{}}, these are just temporary to build to row component
  return (
    <TasksProvider>
      <div style={{marginTop: '100px', width: '100%', display: 'flex', justifyContent:'center'}}>
        <button onClick={togglePopup}>Open Popup</button>
        <div style={{width: '50%'}}>
          <Tasks tasks={tasks}/>
        </div>
        {isPoppedUp?
        <Popup closePopup={handlePopupClose}>
          <CreateTaskContent />
        </Popup>
        :null}
      </div>
    </TasksProvider>
  )
}

export default App
