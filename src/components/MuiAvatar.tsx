import { Stack, Avatar, AvatarGroup } from "@mui/material";
const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>ZI</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>ZI</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/16.jpg"
            alt="Woman"
          ></Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/17.jpg"
            alt="Man"
          ></Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
          variant="square"
        >
          BW
        </Avatar>
        <Avatar
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
          variant="rounded"
        >
          ZI
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
