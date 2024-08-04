'use client';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

// Define el tipo de los datos de las tareas
interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
}

// Define el tipo del contexto
interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
}

// Crea el contexto con el tipo definido
const AppContext = createContext<TodoContextType | undefined>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Función para cargar las tareas desde la API
  const fetchTodos = async () => {
    try {
      const response = await axios.get<Todo[]>('http://localhost:5000/todos');
      console.log(response);
      setTodos(response.data);
    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }
  };

  // useEffect para cargar las tareas al montar el componente
  useEffect(() => {
    fetchTodos();
  }, []);

  // Función para agregar una nueva tarea
  const addTodo = async (title: string, description: string) => {
    try {
      const response = await axios.post<Todo>('http://localhost:5000/todos', {
        title,
        description,
        completed: false,
      });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };

  return (
    <AppContext.Provider value={{ todos, addTodo }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de un AppWrapper');
  }
  return context;
}
