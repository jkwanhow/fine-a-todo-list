export interface TaskProps {
    title: string;
    details: string;
}

export interface HeaderProps {
    title: string;
    expanded: boolean,
    handleExpandClick?: () => void;
    canExpand?: boolean;

}
export interface DetailsProps {
    details: string;
}