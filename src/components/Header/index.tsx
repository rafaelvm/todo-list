import { useState } from "react";
import { ListItem } from "../ListItem";
import * as C from "./styles";
import { IListItem } from "../ListItem/types";
import AddDescription from "../AddDescription";

const Header = () => {
  const [list, setList] = useState<IListItem[]>([]);

  const handleAddTask = (taskDescription: string) => {
    const oldData = [...list];
    oldData.push({
      id: list.length + 1,
      description: taskDescription,
      done: false,
    });
    setList(oldData);
  };

  const handleRemove = (id: number) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  return (
    <div>
      <C.Header>To-Do List</C.Header>
      <AddDescription onSubmit={handleAddTask} />

      {list.map((item, index) => (
        <div>
          <ListItem key={index} item={item} />

          <C.Remove onClick={() => handleRemove(item.id)}>Remove task</C.Remove>
        </div>
      ))}
    </div>
  );
};

export default Header;
