import TaskFormCustom from '@/components/TaskFormCustom';
import TaskList from '@/components/TaskList';
import React from 'react'

export default function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Tasky : Your personal task manager</h1>
      <TaskFormCustom />
      <TaskList />
    </div>
  );
}
