import { ITodo } from '../interfaces/todo.interface';

export function todoIdMapper(rawTodos: ITodo) {
  const idsArray = Object.keys(rawTodos);
  return Object.values(rawTodos).map((item, index) => {
    item.id = idsArray[index];
    return item;
  });
}
