import React from 'react';
import { Box, Stack, Link } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" pb="24px">
    <Stack
      gap="24px"
      direction="row"
      justifyContent="center"
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <Link href="/help" underline="hover" color="inherit">
        Help
      </Link>
      <Link href="/privacy" underline="hover" color="inherit">
        Privacy
      </Link>
      <Link href="/feedback" underline="hover" color="inherit">
        Send Feedback
      </Link>
    </Stack>
  </Box>
);

export default Footer;
