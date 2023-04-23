import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import {Box ,Typography ,Stack,List,ListItem,ListItemText} from '@mui/material';
import { TODO_LIST_ABI,TODO_LIST_ADDRESS} from '../config'
import { TextField,Button } from '@mui/material';

import Grid from '@mui/material/Grid';

export default function TodoList() {
  useEffect(() => {
    loadBlockchainData();
  }, []);

  const [address, setAddress] = useState(null);
  const [net, setNetwork] = useState(null); 
  const [todoList, setTodoList] = useState(null); 
  const [taskCount, setTaskCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  async function loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")  
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    setAddress(accounts[0]);
    setNetwork(network);

    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)
    setTodoList(todoList);
   
    const taskCount = await todoList.methods.taskCount().call();
    setTaskCount(taskCount);
  
    const taskList = [];
    for (let i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call();
      taskList.push(task);
    }
    setTasks(taskList);
  }

  return (
    <div>
      <Box sx={{ width: "600px",height:"600px",boxShadow: 3,borderRadius:4 }} margin={2}>
        <Stack direction="column" spacing={2} alignItems={'center'}  marginTop={"10px"}> 
          <Typography variant='h5'>
            Blockchain Based To Do List 
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={'right'}>
            <Typography>
              Network :
            </Typography>
            <Typography>
              {net}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography>
              Account :
            </Typography>
            <Typography>
              {address }
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Typography>
              You Have {taskCount } Tasks to do
            </Typography>
          </Stack>
          
          <Stack direction="row" spacing={2}>
            <TextField
              label="Add Task ... "
            />
            <Button variant="contained">Add</Button>
          </Stack>

          <List>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                <ListItemText primary={task.content} />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Box>
    </div>
  );
}
