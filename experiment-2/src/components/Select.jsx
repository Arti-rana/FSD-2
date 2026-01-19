import { useState } from "react";
import { Select, MenuItem } from "@mui/material";

export default function BasicSelect() {
  const [value, setValue] = useState("");

  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      displayEmpty
    >
      <MenuItem value="">Select Age</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
}
