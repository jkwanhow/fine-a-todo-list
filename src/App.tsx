import React, {useState} from 'react';

import { TasksProvider } from './contexts/TaskContext';
import Tasks from './components/Tasks';
import Popup from './components/Popup';
import CreateTaskContent from './components/Popup/PopupContent/CreateTaskContent';
import { usePopupDispatch } from './contexts/PopupContext';

function App() {
  const popupDispatch = usePopupDispatch();
  // Remove and change the styles{{}}, these are just temporary to build to row component
  return (
    <TasksProvider>
        <div style={{marginTop: '100px', width: '100%', display: 'flex', flexDirection: 'column', alignItems:'center', gap: '20px'}}>
          <div style={{width: '50%'}}>
            <Tasks/>
          </div>
          <button className='add-task-button' onClick={() => {
            popupDispatch({
              type:"open",
              content: 'CREATE',
            })
          }}>Add a task</button>
          <Popup />
        </div>
    </TasksProvider>
  )
}

export default App
