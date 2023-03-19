import { useReducer, useRef, useState } from 'react';
import { Button, CloseButton, FormControl, InputGroup, ListGroup } from 'react-bootstrap';

import { initialValue, reducerTodo } from '../store/reducer';
import { addTodo, deleteTodo } from '../store/actions';

function Todos() {
    const [todos, dispatch] = useReducer(reducerTodo, initialValue);
    const [text, setText] = useState('');
    const refInput = useRef();

    const handleAddTodo = () => {
        dispatch(addTodo(text));
        refInput.current.focus();
        refInput.current.value = '';
    };

    const handleDeleteTodo = (index) => {
        dispatch(deleteTodo(index));
    };

    return (
        <div className="todo-container">
            <InputGroup>
                <InputGroup.Text>Name todo</InputGroup.Text>
                <FormControl
                    placeholder="Enter your todo"
                    onChange={(e) => setText(e.target.value)}
                    ref={refInput}
                />
                <Button variant="outline-info" onClick={handleAddTodo}>
                    Add Todo
                </Button>
            </InputGroup>
            <ListGroup>
                {todos?.todoList?.map((item, index) => (
                    <ListGroup.Item key={index}>
                        {item} <CloseButton onClick={() => handleDeleteTodo(index)} />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default Todos;
