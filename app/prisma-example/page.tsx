import prisma from '@/utils/db';

const PrismaExamplePage = async () => {
  const tasks = await prisma.task.findMany();
//   const addTask = async () => {
//     'use server';
//     await prisma.task.create({ data: { content: 'New Task' } });
//   };
  return (
    <div>
      <h1>Tasks</h1>
      {/* <pre>{JSON.stringify(tasks, null, 2)}</pre> */}
      {/* <button onClick={addTask}>Add A Task To DB</button> */}
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className='text-xl py-2'>
            😬 {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExamplePage;
