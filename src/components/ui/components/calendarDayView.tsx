import { useCalendarStore } from "@/store/calenderStore";
import { useTaskStore } from "@/store/taskStore";
import { useEffect, useState } from "react";
import { Input } from "../input";
import { Button } from "../button";
import { Card, CardContent, CardHeader } from "../card";
import TaskComponent from "./taskComponent";

function CalendarDayView() {
    const { startDate } = useCalendarStore();
    const { addTask, getTasksForDate, toggleTask, deleteTask, updateTaskTitle } = useTaskStore();
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

    const onTitleChange = (id: string, title: string) => {
        updateTaskTitle(id, title);
    };

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
                            <TaskComponent
                                key={task.id}
                                task={task}
                                toggleTaskId={toggleTaskId}
                                deleteTaskId={deleteTaskId}
                                onTitleChange={onTitleChange}
                            />
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