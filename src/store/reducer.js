const initialValue = {
    todo: '',
    todoList: ['Hom nay tui di ia'],
};

const reducerTodo = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, payload],
            };
        case 'DELETE_TODO':
            const temp = [...state.todoList];
            temp.splice(payload, 1);
            return {
                ...state,
                todoList: [...temp],
            };
        default:
            break;
    }
};

export { initialValue, reducerTodo };
