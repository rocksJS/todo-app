import { ITodo } from '../interfaces/todo.interface';
// функция которая нужна для конвертации обьекта с фаербейса в массив с обьектами
export function todoIdMapper(rawTodos: ITodo) {
  const idsArray = Object.keys(rawTodos);
  return Object.values(rawTodos).map((item, index) => {
    item.id = idsArray[index];
    return item;
  });
}
