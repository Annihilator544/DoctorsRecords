import { LucideX } from "lucide-react";
import { Checkbox } from "../checkbox";
import { Input } from "../input";
import { useEffect, useState } from "react";
import type { Task } from "@/types/task";

function TaskComponent({ task, toggleTaskId, deleteTaskId, onTitleChange }: { task: Task, toggleTaskId: (id: string) => void, deleteTaskId: (id: string) => void, onTitleChange: (id: string, title: string) => void }) {
    const [title, setTitle] = useState(task.title);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (title !== undefined) {
                onTitleChange(task.id, title);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [title, task.id, onTitleChange]);

    return (
        <div
            key={task.id}
            className="flex items-center gap-2 p-2 bg-background rounded border"
        >
            <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTaskId(task.id)}
                className="w-4 h-4 cursor-pointer"
            />
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`flex-1 ${
                    task.completed ? "line-through text-muted-foreground" : " text-foreground"
                }`}
            />
            <LucideX
                onClick={() => deleteTaskId(task.id)}
                className="cursor-pointer text-destructive hover:opacity-80"
            />
        </div>
    )
}

export default TaskComponent