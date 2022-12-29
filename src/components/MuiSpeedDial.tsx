import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IosShareIcon from "@mui/icons-material/IosShare";
import EditIcon from "@mui/icons-material/Edit";

const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction
        icon={<IosShareIcon />}
        tooltipTitle="Share"
        tooltipOpen
      />
    </SpeedDial>
  );
};

export default MuiSpeedDial;
