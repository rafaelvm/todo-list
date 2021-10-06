import { useState, KeyboardEvent } from "react";
import * as C from "./styles";

type Props = {
  onSubmit: (taskDescription: string) => void;
};

const AddDescription = ({ onSubmit }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onSubmit(inputText);
      setInputText("");
    }
  };

  return (
    <C.Container>
      <div className="addIcon">➕</div>
      <input
        type="text"
        placeholder="Add a task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};

export default AddDescription;
