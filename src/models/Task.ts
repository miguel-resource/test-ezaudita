export interface Task {
    id?: string;
    title: string;
    status?: boolean;
    priority: string;
    description: string;
}

export interface TaskForms extends Task {
    saveForm: () => void;
}