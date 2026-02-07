import { useCalendarStore } from "@/store/calenderStore";
import { useTaskStore } from "@/store/taskStore";
import { useEffect, useState } from "react";
import { Input } from "../input";
import { Button } from "../button";
import { LucideX } from "lucide-react";
import { Card, CardContent, CardHeader } from "../card";

function CalendarDayView() {
    const { startDate } = useCalendarStore();
    const { addTask, getTasksForDate, toggleTask, deleteTask } = useTaskStore();
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [allDayTasks, setAllDayTasks] = useState(getTasksForDate(startDate));

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;
        addTask({
            title: newTaskTitle,
            date: startDate,
            completed: false,
        });
        setNewTaskTitle("");
        setAllDayTasks(getTasksForDate(startDate));
    };

    const toggleTaskId = (id: string) => {
        toggleTask(id);
        setAllDayTasks(getTasksForDate(startDate));
    }

    const deleteTaskId = (id: string) => {
        deleteTask(id);
        setAllDayTasks(getTasksForDate(startDate));
    }

    useEffect(() => {
        setAllDayTasks(getTasksForDate(startDate));
    }, [startDate, getTasksForDate]);

    return (
        <div className="flex flex-col h-full p-4 gap-4 overflow-y-auto">
            <form onSubmit={handleAddTask} className="flex gap-2 border-b pb-4">
                <Input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Add a task..."
                    className="w-full"
                />
                <Button type="submit">
                    Add
                </Button>
            </form>

            <Card className="flex-1 p-6 max-sm:p-2 hover:shadow-sm">
                <CardHeader>
                    All Day Tasks
                </CardHeader>
                {allDayTasks.length > 0  ?  (
                    <CardContent className="gap-4 flex flex-col">
                        {allDayTasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex items-center gap-2 p-2 bg-background rounded border"
                            >
                                <Input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskId(task.id)}
                                    className="w-4 h-4 cursor-pointer"
                                />
                                <span
                                    className={`flex-1 ${
                                        task.completed ? "line-through text-muted-foreground" : ""
                                    }`}
                                >
                                    {task.title}
                                </span>
                                <LucideX
                                    onClick={() => deleteTaskId(task.id)}
                                    className="cursor-pointer text-destructive hover:opacity-80"
                                />
                            </div>
                        ))}
                </CardContent>
                )
                : 
                (
                    <CardContent>
                        <p className="text-muted-foreground">No tasks for this day.</p>
                    </CardContent>
                )}
            </Card>
        </div>
    );
}

export default CalendarDayView;