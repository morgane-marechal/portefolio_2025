import * as React from 'react';
import { Box } from '@mui/material';

const LineHorizon = () => {
  return (
    <Box
      className="light-border-horizontal"
      sx={{
        mt: 4,
        marginBottom:{md:10, xs:8}
      }}
    >
      <Box className="light-glow-horizontal" />
    </Box>
  );
};

export default LineHorizon;