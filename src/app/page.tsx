import TodosClient from '@/components/todos/client';
import TodosForm from '@/components/todos/form';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Mis tareas</h1>
      <TodosForm />
      <TodosClient />
    </div>
  );
}
