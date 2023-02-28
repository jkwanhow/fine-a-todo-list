export interface TaskProps {
    id: number;
    title: string;
    details: string;
    complete: boolean;
}

export interface HeaderProps {
    title: string;
    expanded: boolean;
    handleExpandClick?: () => void;
    canExpand?: boolean;
    complete: boolean;
    handleStatusClick: () => void;
    handleDispatch: (action:"DELETE"|"EDIT") => void;

}
export interface DetailsProps {
    details: string;
}