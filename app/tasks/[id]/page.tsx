import EditTaskForm from '@/components/EditTaskForm';
import { getTask } from '@/utils/actions';

const SingleTaskPage = async ({params}:{params:{id:string}}) => {
    const task = await getTask(params.id);

    return <div>SingleTaskPage
         <EditTaskForm task={task} />
    </div>
}

export default SingleTaskPage;