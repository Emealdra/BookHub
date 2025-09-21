import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';


export default function SizeAvatars() {
 return <Box sx = {{display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'center',
           alignSelf: 'center',
           flex: 1,
           padding: 2
           }}>
    <Avatar
       src="../../public/magsakay-pic.jpg"
       sx={{ 
         width: 250, 
         height: 250, 
         marginBottom: 2,
         cursor: 'pointer',
         transition: 'all 0.3s ease',
         '&:hover': {
           transform: 'scale(1.05)',
           boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
         }
       }}
     />
     <Typography variant="h4">Magsakay, Ethan Luke P.</Typography>
     <Typography variant="subtitle1">Full-Stack Developer</Typography>
 </Box>
   
 }




