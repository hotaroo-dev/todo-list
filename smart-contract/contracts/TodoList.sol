pragma solidity >=0.4.22 <0.7.0;
pragma experimental ABIEncoderV2;

contract TodoList {
    struct Todo {
        uint id;
        string name;
        string description;
        bool isCompleted;
        bool isDeleted;
        uint256 createdAt;
    }

    // Array to store all Todo items
    Todo[] public todos;

    // Mapping to store the index of each Todo item in the array
    mapping(uint256 => address) public todoToOwner;

    event AddTodo(address recepient, uint todoId);

    event DeleteTodo(uint todoId, bool isDeleted);

    function addTodo(
        string memory _name,
        string memory _description,
        uint256 _createdAt
    ) public {
        uint todoId = todos.length;
        Todo memory newTodo = Todo({
            id: todoId,
            name: _name,
            description: _description,
            isCompleted: false,
            isDeleted: false,
            createdAt: _createdAt
        });

        todos.push(newTodo);

        // Store the index of the Todo item along with the creator's address
        todoToOwner[todoId] = msg.sender;

        emit AddTodo(msg.sender, todoId);
    }

    function deleteTodo(uint todoId) external {
        require(
            todoToOwner[todoId] == msg.sender,
            "You are not the owner of this todo"
        );
        todos[todoId].isDeleted = true;

        emit DeleteTodo(todoId, todos[todoId].isDeleted);
    }

    function editTodoDescription(
        uint todoId,
        string memory _description
    ) public {
        Todo memory todo = todos[todoId];
        todo.description = _description;
        todos[todoId] = todo;
    }

    function toggleCompleted(uint todoId) external {
        Todo memory todo = todos[todoId];
        todo.isCompleted = !todo.isCompleted;
        todos[todoId] = todo;
    }

    function getMyTodos() public view returns (Todo[] memory) {
        Todo[] memory myTodos = new Todo[](todos.length);
        uint counter = 0;
        for (uint i = 0; i < todos.length; i++) {
            if (todoToOwner[i] == msg.sender && todos[i].isDeleted == false) {
                myTodos[counter] = todos[i];
                counter++;
            }
        }
        Todo[] memory result = new Todo[](counter);
        for (uint i = 0; i < counter; i++) {
            result[i] = myTodos[i];
        }
        return result;
    }
}
