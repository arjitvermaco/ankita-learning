import React from 'react'
import { getAllTasks } from '@/utils/actions';
import Link from 'next/link';
export default async function TaskList() {
    const tasks = await getAllTasks();
    console.log(tasks);
  return (
    <div className='max-w-4xl mx-auto'>
      <h3 className='text-2xl font-bold text-center mt-8'>Tasks List</h3>
      <ul className='mt-8'>
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? 'line-through' : null
              }`}
            >
              {task.content}
            </h2>
            <div className='flex gap-6 items-center'>
              <Link
                href={`/tasks/${task.id}`}
                className='btn btn-accent btn-xs'
              >
                edit
              </Link>
              {/* <DeleteForm id={task.id} /> */}
            </div>
          </li>
        );
      })}
    </ul>
    </div>
  )
}
