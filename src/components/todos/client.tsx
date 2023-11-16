'use client';

import { useState, useEffect } from 'react';
import { TrashIcon } from 'lucide-react';

import { useTodoStore } from '@/hooks/use-todos-store';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';

const TodosClient = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { todos, removeTodo, toggleTodo } = useTodoStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10%]">Completada</TableHead>
          <TableHead>Texto</TableHead>
          <TableHead className="w-[15%]">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos?.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo?.(todo.id)}
              />
            </TableCell>
            <TableCell className={todo.completed ? 'line-through' : 'none'}>
              {todo.text}
            </TableCell>
            <TableCell>
              <Button
                onClick={() => removeTodo?.(todo.id)}
                variant="destructive"
              >
                <TrashIcon className="w-4 h-4 mr-2" />
                Eliminar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodosClient;
