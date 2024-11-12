'use server';

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { z } from 'zod';
import { redirect } from "next/navigation";

export const createTask = async (formData: FormData) => {
    console.log(formData)
    const content = formData.get('content');
    await prisma.task.create({
        data: {
            content: content as string,
        },
    });
    revalidatePath('/tasks');
}

export const createTaskCustom = async (previousState: any, formData: FormData) => {
    const content = formData.get('content');
    const Task = z.object({
        content:z.string().min(5),
    })
    try {
        Task.parse({content});
        await prisma.task.create({
            data: {
              content: content as string,
            },
          });
        revalidatePath('/tasks');
        return { message: 'success' };
    } catch (error) {
        console.log(error);
        return { message: 'error' };
    }
}

export const getAllTasks = async () => {
    const tasks = await prisma.task.findMany();
    return tasks;
}

export const getTask = async (id) => {
    return prisma.task.findUnique({
      where: {
        id,
      },
    });
  };
export const editTask = async (formData) => {
    const id = formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');
  
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        content,
        completed: completed === 'on' ? true : false,
      },
    });
    redirect('/tasks');
  };