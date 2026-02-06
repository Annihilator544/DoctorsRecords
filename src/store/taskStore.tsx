import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Task } from '@/types/task';

interface TaskState {
    tasks: Task[];
    addTask: (task: Omit<Task, 'id'>) => void;
    deleteTask: (id: string) => void;
    toggleTask: (id: string) => void;
    getTasksForDate: (date: Date) => Task[];
}

export const useTaskStore = create<TaskState>()(
    persist(
        (set, get) => ({
            tasks: [],
            addTask: (task) =>
                set((state) => ({
                    tasks: [...state.tasks, { ...task, id: crypto.randomUUID() }],
                })),
            deleteTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id),
                })),
            toggleTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, completed: !task.completed } : task
                    ),
                })),
            getTasksForDate: (date) => {
                const tasks = get().tasks.filter((task) => {
                    const taskDate = new Date(task.date);
                    return (
                        taskDate.getFullYear() === date.getFullYear() &&
                        taskDate.getMonth() === date.getMonth() &&
                        taskDate.getDate() === date.getDate()
                    );
                });
                return tasks;
            },
        }),
        {
            name: 'task-storage',
        }
    )
);