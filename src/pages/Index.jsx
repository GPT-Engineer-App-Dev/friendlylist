import React, { useState } from 'react';
import { Container, Input, Button, VStack, HStack, Checkbox, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Todo App</Heading>
        <HStack width="100%">
          <Input 
            placeholder="Add a new task" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <VStack width="100%" spacing={3} alignItems="stretch">
          {tasks.map((task, index) => (
            <HStack key={index} spacing={4}>
              <Checkbox 
                isChecked={task.completed} 
                onChange={() => toggleTaskCompletion(index)}
              />
              <Input 
                value={task.text} 
                isReadOnly 
                textDecoration={task.completed ? "line-through" : "none"} 
              />
              <IconButton 
                aria-label="Delete task" 
                icon={<FaTrash />} 
                onClick={() => deleteTask(index)} 
                colorScheme="red"
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;