import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const AddForm = () => {
  const [value, setValue] = useState("");

  const onChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <form>
      <Input value={value} onChange={onChange} />
      <Button type="submit">Create</Button>
    </form>
  );
};

export default AddForm;
