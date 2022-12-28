import { Stack, Link, Typography } from "@mui/material";
export const MuiLink = () => {
  return (
    <Stack spacing={3} direction="column" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary" underline="hover">
        Underline on hover
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          No underline ever
        </Link>
      </Typography>
    </Stack>
  );
};
