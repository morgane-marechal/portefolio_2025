import { IconButton, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function EmailButton() {
  return (
  <IconButton
    component="a"
    href="mailto:morgane.marechal12@gmail.com"
    sx={{ color: "rgb(211, 155, 82)" }}
  >
    <EmailIcon sx={{ fontSize: 40 }} />
  </IconButton>
  );
}