import { Box } from '@mui/material';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="h-screen flex items-center justify-center">{children}</Box>
  );
}
