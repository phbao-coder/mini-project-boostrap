// payload nhận vào là một todo mới (string)
export function addTodo(payload) {
    return {
        type: 'ADD_TODO',
        payload,
    };
}

// payload nhận vào là một index (vị trí của todo sẽ xóa)
export function deleteTodo(payload) {
    return {
        type: 'DELETE_TODO',
        payload,
    };
}
