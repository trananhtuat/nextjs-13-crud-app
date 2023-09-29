"use client";

import { addTaskAction } from '@/app/actions';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";

const TaskAdd = ({ onTaskAdded }) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();

    try {
      if (isSubmiting) return;
      if (title.trim().length === 0) return;

      setIsSubmiting(true);

      const res = await addTaskAction({ title });

      onTaskAdded(res.newTask);

      setIsSubmiting(false);
      setTitle("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={addTask} className='flex gap-2'>
      <Input
        placeholder='Enter your task here'
        isDisabled={isSubmiting}
        value={title}
        onValueChange={setTitle}
      />
      <Button
        type='submit'
        variant='solid'
        color='primary'
        isIconOnly
        isDisabled={isSubmiting}
        isLoading={isSubmiting}
      >
        {!isSubmiting && <CiCirclePlus size="1.5em" />}
      </Button>
    </form>
  );
};

export default TaskAdd;