import { Note, Tab, Todos } from "~/types";

export const initialTodos: Tab & Todos = {
  position: {
    x: 0,
    y: 264,
    z: 0,
  },
  isOpen: true,
  todosList: [
    {
      id: Date.now().toString(),
      value: "Click on me to mark me as completed",
      completed: false,
    },
  ],
};

export const initialNoteControl: Tab = {
  position: {
    x: 0,
    y: 80,
    z: 0,
  },
  isOpen: true,
};

export const initialNotes: Note[] = [
  {
    id: Date.now().toString(),
    value: "Example note",
    position: {
      x: 8,
      y: 80,
      z: 0,
    },
    isOpen: false,
  },
];
