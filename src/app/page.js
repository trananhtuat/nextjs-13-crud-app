import TaskList from "@/components/task/TaskList";
import { getTaskAction } from "./actions";

export default async function Home() {
  const tasks = await getTaskAction();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 sm:p-12 md:p-24">
      <TaskList data={tasks} />
    </main>
  );
}
