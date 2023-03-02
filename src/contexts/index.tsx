import { TasksProvider } from "./TaskContext"
import { PopupProvider } from "./PopupContext"

export default function ContextProviders({children}:{children:JSX.Element|JSX.Element[]}){
    return(
        <TasksProvider>
            <PopupProvider>
                {children}
            </PopupProvider>
        </TasksProvider>
    )
}