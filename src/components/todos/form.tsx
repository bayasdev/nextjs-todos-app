'use client';

import { useState } from 'react';
import { PlusIcon } from 'lucide-react';

import { useTodoStore } from '@/hooks/use-todos-store';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TodosForm = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodoStore();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    addTodo?.(text);
    setText('');
  };
  return (
    <form onSubmit={handleAddTodo} className="flex gap-4">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <Button type="submit">
        <PlusIcon className="w-4 h-4 mr-2" />
        Agregar tarea
      </Button>
    </form>
  );
};

export default TodosForm;
