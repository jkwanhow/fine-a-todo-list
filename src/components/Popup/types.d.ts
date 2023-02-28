export type PopupContent = "CREATE"|"DELETE"

export interface PopupDetails{
    open: boolean, 
    content: PopupContent
    targetId: number;
}