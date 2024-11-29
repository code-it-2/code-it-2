import { Todo } from "@/types/todo";
import TodoActions from "./actions";
import TodoItemCheckbox from "./todo-item-checkbox";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div
      className="flex items-center gap-2 text-sm px-2 hover:bg-gray-50 rounded group animate-fade-in-up leading-5"
      data-cy="todo-item"
    >
      <TodoItemCheckbox todo={todo} />
      <span className={todo.done ? "text-gray-400" : ""}>{todo.title}</span>
      <TodoActions todo={todo} />
    </div>
  );
};

export default TodoItem;
