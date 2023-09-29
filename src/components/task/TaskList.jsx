"use client";

import React, { useState } from 'react';
import TaskAdd from './TaskAdd';
import { Divider } from '@nextui-org/divider';
import TaskItem from './TaskItem';

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState(data);

  const onTaskAdded = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const onTaskDeleted = (task) => {
    setTasks(tasks.filter(e => e._id !== task._id));
  };

  return (
    <div className='p-6 shadow-xl rounded-lg w-unit-8xl max-w-full'>
      <div className='flex flex-col gap-6'>
        <h4 className='text-center font-bold text-xl text-gray-700'>
          Next 13 Todo App
        </h4>
        <TaskAdd onTaskAdded={onTaskAdded} />
        <div className='flex flex-col'>
          <Divider className='bg-gray-100' />
          {tasks.map(task => (
            <TaskItem data={task} key={task._id} onTaskDeleted={onTaskDeleted} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;