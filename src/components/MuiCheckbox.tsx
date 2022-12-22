import React, { useState } from "react";
import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";
export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log(acceptTnC);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};
