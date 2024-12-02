// import React from 'react';
// import {
//   Checkbox,
//   Grid,
//   TextField,
//   FormControlLabel,
//   Paper,
//   Button
// } from '@mui/material';
// const Signup = () => {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <div style={{ padding: 30 }}>
//       <Paper>
//         <Grid
//           container
//           spacing={3}
//           direction={'column'}
//           justify={'center'}
//           alignItems={'center'}
//         >
//           <Grid item xs={12}>
//             <TextField label="Type your Username"></TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField label="Type your Password" type={'password'}></TextField>
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={checked}
//                   onChange={handleChange}
//                   label={'Keep me logged in'}
//                   inputProps={{ 'aria-label': 'primary checkbox' }}
//                 />
//               }
//               label="Keep me logged in"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button fullWidth> Login </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// };

// export default Signup;

import React from 'react';
import { Box, TextField, Checkbox, FormControlLabel, Button, Paper } from '@mui/material';

const Signup = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        gap: 2, // Space between elements
        width: 300, // Set fixed width
        margin: '0 auto', // Center the form horizontally
      }}
      component={Paper}
    >
      <TextField label="Type Username" />
      <TextField label="Type Password" type="password" />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Keep me logged in"
      />
      <Button variant="contained">Login</Button>
    </Box>
  );
};

export default Signup;


