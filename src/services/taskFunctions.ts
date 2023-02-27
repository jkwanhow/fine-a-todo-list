import { TaskProps } from "../components/Tasks/Task/types"

export const getIndexOfTaskWithId = (id: Number, tasks: TaskProps[]) => {
    for (let currentIndex = 0; currentIndex < tasks.length; currentIndex++){
        let task = tasks[currentIndex];
        if (task.id === id) return currentIndex;
    }
    // if not in tasks, return -1
    return -1;
}