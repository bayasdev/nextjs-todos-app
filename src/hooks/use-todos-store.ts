import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { toast } from '@/components/ui/use-toast';

// Define the Todo type
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Define the state type
type State = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

// Create the store using the persist middleware
export const useTodoStore = create<State>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text) => {
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text,
              completed: false,
            },
          ],
        }));
        toast({
          title: 'Tarea agregada',
        });
      },
      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
        toast({
          title: 'Tarea eliminada',
          variant: 'destructive',
        });
      },
    }),
    {
      name: 'todos',
    }
  )
);
