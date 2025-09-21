
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';
import MyTabs from './MyTabs'

const style = {
 py: 0,
 width: '100%',
 borderRadius: 2,
 border: '1px solid',
 borderColor: 'divider',
 backgroundColor: 'background.paper',
};

export default function BasicRating() {
 const value = 5;

 return <Box sx = {{display: 'flex',
           flexDirection: 'column',
           alignItems: 'left',
           justifyContent: 'flex-start',
           marginTop: 5,
           flex: 1,
           mr: 3
           }}>
   <Box sx = {{display: 'flex', flexDirection: 'column'}}>
     <Box sx = {{display: 'flex', flexDirection: 'row'}}>
       <Typography variant="h4" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>
               MAGSAKAY, Ethan Luke P.
       </Typography>
       <Box sx={{display: 'flex', alignItems: 'center', ml: 3}}>
         <LocationOnIcon sx={{fontSize: 20}} />
         <Typography variant="h5" sx={{ml: 1, fontWeight: 400}}>Bulacan</Typography>
       </Box>
     </Box>   
     <Typography variant="h6" sx={{color: 'text.secondary', marginBottom: 2, fontWeight: 300, letterSpacing: '1px'}}>Full-Stack Developer</Typography>
     <Rating name="read-only" value={value} readOnly size="large" sx={{marginBottom: 6}}/>
   </Box>
   <Divider sx={style}/>
   <MyTabs />
  
 </Box>
}