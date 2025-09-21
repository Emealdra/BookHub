import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import MaleIcon from '@mui/icons-material/Male';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function CustomTabPanel(props) {
 const { children, value, index, ...other } = props;

 return (
   <div
     role="tabpanel"
     hidden={value !== index}
     id={`simple-tabpanel-${index}`}
     aria-labelledby={`simple-tab-${index}`}
     {...other}
   >
     {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
   </div>
 );
}

CustomTabPanel.propTypes = {
 children: PropTypes.node,
 index: PropTypes.number.isRequired,
 value: PropTypes.number.isRequired,
};

function a11yProps(index) {
 return {
   id: `simple-tab-${index}`,
   'aria-controls': `simple-tabpanel-${index}`,
 };
}

export default function BasicTabs() {
 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
   setValue(newValue);
 };

 return (
   <Box sx={{ width: '100%' }}>
     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
       <Tabs value={value} onChange={handleChange}>
         <Tab label="About" {...a11yProps(0)} />
         <Tab label="Skills" {...a11yProps(1)} />
       </Tabs>
     </Box>
     <CustomTabPanel value={value} index={0}>
       <Box sx={{ minHeight: 200 }}>
         <Box sx={{ display: 'flex', gap: 1, alignItems:'center', mb: 2}}>
             <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main'}}>Address:</Typography>
             <Typography variant="body1" sx={{ fontWeight: 300}}>Bulacan</Typography>
         </Box>
         <Box sx={{ display: 'flex', gap: 1, alignItems:'center', mb: 2}}>
             <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main'}}>Phone:</Typography>
             <Typography variant="body1" sx={{ fontWeight: 300}}>+63 912 345 6789</Typography>
         </Box>
         <Box sx={{ display: 'flex', gap: 1, alignItems:'center', mb: 2}}>
             <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main'}}>Email:</Typography>
             <Typography variant="body1" sx={{ fontWeight: 300}}>ethanlukemagsakay@gmail.com</Typography>
         </Box>
         <Box sx={{ display: 'flex', gap: 1, alignItems:'center', mb: 2}}>
             <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main'}}>Birthday:</Typography>
             <Typography variant="body1" sx={{ fontWeight: 300}}> April 29, 2003</Typography>
         </Box>
         <Box sx={{ display: 'flex', gap: 1, alignItems:'center', mb: 2}}>
             <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main'}}>Gender:</Typography>
             <MaleIcon sx={{ color: 'primary.main' }} />
         </Box>
       </Box>
     </CustomTabPanel>
     <CustomTabPanel value={value} index={1}>
       <Box sx={{ minHeight: 200 }}>
         <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1.5 }}>
             <Chip label="ReactJS" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }}/>
             <Chip label="JavaScript" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="TypeScript" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="HTML" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="CSS" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="Node.js" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="Java" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="C#" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="Python" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="SQL" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="Git" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="AWS" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="Unix" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="Docker" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
             <Chip label="Robot Framework" size="medium" variant="outlined" sx={{ fontWeight: 500, '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.05)', transition: 'all 0.2s' } }} />
         </Stack>
       </Box>
     </CustomTabPanel>
   </Box>
 );
}





