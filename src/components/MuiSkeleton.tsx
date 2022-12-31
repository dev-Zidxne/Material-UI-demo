import { Stack, Skeleton } from "@mui/material";

const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width="250px">
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="circular" width={40} height={40} animation="wave" />
      <Skeleton
        variant="rectangular"
        width={250}
        height={125}
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        width={250}
        height={125}
        animation={false}
      />
    </Stack>
  );
};

export default MuiSkeleton;
