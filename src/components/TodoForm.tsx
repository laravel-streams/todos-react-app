import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
	addTodo: PropTypes.func.isRequired,
};

function TodoForm(props: any) {
	const [todoInput, setTodoInput] = useState('');

	function handleInput(event: any) {
		setTodoInput(event.target.value);
	}

	function handleSubmit(event: any) {
		event.preventDefault();

		if (todoInput.trim().length === 0) {
			return;
		}

		props.addTodo(todoInput);

		setTodoInput('');
	}

	return (
		<form action="#" onSubmit={handleSubmit}>
			<input
				type="text"
				value={todoInput}
				onChange={handleInput}
				className="todo-input"
				placeholder="What do you need to do?"
			/>
		</form>
	);
}

export default TodoForm;
