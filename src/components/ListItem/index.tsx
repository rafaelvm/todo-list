import { useState } from "react";
import * as C from "./styles";
import { IListItem } from "./types";

type Props = {
  item: IListItem;
};

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.description}</label>
    </C.Container>
  );
};
