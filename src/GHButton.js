import { IconButton, Box } from '@mui/material';
import { DiGithubBadge } from "react-icons/di";


export default function GithubButton() {
  return (
    <IconButton
      component="a"
      href="https://github.com/morgane-marechal"
      sx={{ color: "rgb(211, 155, 82)" }}
    >
      <DiGithubBadge size={40} />
    </IconButton>
  );
}