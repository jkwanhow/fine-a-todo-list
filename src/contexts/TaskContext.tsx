import {createContext, useContext, useReducer} from 'react';
import {type Dispatch} from 'react';
import { TaskProps } from '../components/Tasks/Task/types';
import { getIndexOfTaskWithId } from '../services/taskFunctions';


type TasksAction = {
    type: string;
    payload?: TaskProps;
    id?: number;
}


const initialTasks:TaskProps[] = [
    {
        id: 0,
        title: 'example title',
        details: 'this is a temporary description for now will delete later',
        complete: false,
    },
    {
        id: 1,
        title: 'Eat Food',
        details: 'temp description two',
        complete: false
    }
]

const TaskContext = createContext(initialTasks);

const TaskDispatchContext = createContext((() => {}) as Dispatch<any>);

export function TasksProvider({children}:{children:JSX.Element[]|JSX.Element}){

    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    return(
        <TaskContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TaskContext.Provider>
    )
}

export function useTasks(){
    return useContext(TaskContext);
}

export function useTasksDispatch(){
    return useContext(TaskDispatchContext);
}

function taskReducer(tasks:any, action:TasksAction){
    switch (action.type){
        case 'add': {
            var highestId = -1;
            if(tasks.length){
            highestId = tasks[0].id;
            tasks.forEach((task:TaskProps) => {
                if (task.id > highestId) {
                    highestId = task.id;
                }
            })
            }
            return [...tasks, 
            {id: highestId+1, ...action.payload}]
        }
        case 'delete' : {
            if (typeof(action.id) !== 'undefined'){
            const taskIdToDelete = action.id;
            const taskIndexToDelete = getIndexOfTaskWithId(taskIdToDelete, tasks);
            let clonedTasks = [...tasks];
            clonedTasks.splice(taskIndexToDelete, 1);
            return clonedTasks;
            }else{
                throw new Error('id is not defined');
            }

        }
        default : {
            throw new Error(`Action: ${action.type} is not a valid action`);
        }
    }
}
