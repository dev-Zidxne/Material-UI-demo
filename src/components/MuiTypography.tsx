import React from "react";
import { Typography } from "@mui/material";
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cumque
        nesciunt sint delectus voluptatem officia iste enim quis magnam,
        incidunt quia praesentium, maxime sequi eum amet inventore adipisci ipsa
        nihil.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        impedit fugiat officia quae! Architecto, doloremque tenetur deleniti
        dolorem molestias dolore amet sed quaerat tempore! Possimus ipsa fuga
        molestiae unde dignissimos?
      </Typography>
    </div>
  );
};
