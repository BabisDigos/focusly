export type MenuKey = "todos" | "notes" | "music";

export interface Tab {
  isOpen: boolean;
  isLocked: boolean;
  position: Position;
}

export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface Todos {
  todosList: Todo[];
}

export interface Todo {
  id: string;
  value: string;
  completed: boolean;
}

export interface Note extends Tab {
  id: string;
  value: string;
}
