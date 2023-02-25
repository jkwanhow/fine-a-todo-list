export interface TaskProps {
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

}
export interface DetailsProps {
    details: string;
}