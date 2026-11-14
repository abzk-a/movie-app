import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e90365' },
    background: { default: '#16181C', paper: '#232533' },
    text: { primary: '#fff' }
  },
  shape: { borderRadius: 18 }
});
export default theme;
