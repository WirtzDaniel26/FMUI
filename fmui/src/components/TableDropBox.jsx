import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const tische = [
  { label: "Tisch1", laenge: 2 },
  { label: "Tisch2", laenge: 1 },
  { label: "Tisch3", laenge: 3 },
  { label: "Tisch4", laenge: 2 },
  { label: "Tisch5", laenge: 1 },
];

const TableDropBox = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={tische}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="tische" />}
    />
  );
};

export default TableDropBox;
