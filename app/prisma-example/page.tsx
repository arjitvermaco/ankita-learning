import prisma from '@/utils/db';

const PrismaExamplePage = async () => {
  //get all tasks from db
  const tasks = await prisma.task.findMany();

  // get single task from db based on id
  const singleTask = await prisma.task.findUnique({
    where: { id: 'cm38rndbz000012q5ipgy88no' },
  });

  console.log(singleTask);
 //if record exisits then update it
  async function updateRecord() {
    'use server';
    await prisma.task.update({
      where: { id: 'cm38rndbz000012q5ipgy88no' },
      data: { content: 'Updated Task' },
    });
  }

  // update or create record
  async function updateOrCreateRecord() {
    'use server';
    await prisma.task.upsert({
      where: { id: 'cm38rndbz000012q5ipgy88no' },
      update: { content: 'Updated Task' },
      create: { content: 'New Task' },
    });
  }

  // delete record
  async function deleteRecord() {
    'use server';
    await prisma.task.delete({ where: { id: 'cm38rndbz000012q5ipgy88no' } });
  }

  //delete multiple records
  // async function deleteMultipleRecords() {
  //   'use server';
  //   await prisma.task.deleteMany(
  //     where: 
  //   );
  // }

  // const user = await prisma.user.findUnique({
  //   where: { email: 'arjit@gmail.com' },
  // });

  // console.log(user);

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
