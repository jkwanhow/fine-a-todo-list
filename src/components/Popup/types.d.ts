export type PopupContent = "CREATE"|"DELETE"|"EDIT"

export interface PopupDetails{
    open: boolean;
    content: PopupContent;
    targetId: number;
    payload?: {title: string, details: string};
}

export interface TaskContentProps {
    title: string;
    details: string;
    handleSubmit: () => void;
    handleTextChange: (value: string, key:"title"|"details") => void;
}

export interface CreateTaskProps{
    targetId: number;
    currentTitle: string;
    currentDetails: string;
}