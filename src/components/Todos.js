import { useReducer } from 'react';

function Todos() {
    const [todos, dispatch] = useReducer();
    return <div>Todos</div>;
}

export default Todos;
