
export const TODO_LIST_ADDRESS = '0x4Cd5DD3d4c14cb2a96Fd76F6d0333Cd989c58F7B'

export const TODO_LIST_ABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tasks",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "content",
          "type": "string"
        },
        {
          "name": "completed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8d977672"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "taskCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xb6cb58a5"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_content",
          "type": "string"
        }
      ],
      "name": "createTask",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x111002aa"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "deleteTask",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x560f3192"
    }
  ]
