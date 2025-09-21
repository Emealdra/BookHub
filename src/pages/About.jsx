import { Box } from '@mui/material'
import MyAvatar from '../components/about-components/MyAvatar'
import MyRating from '../components/about-components/MyRating'

export default function About(){

	return <Box>
     <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, p: 2, alignItems: 'flex-start', position: 'relative', height: '600px'}}>
       <MyAvatar sx={{flex: 1}}/>
       <MyRating sx={{flex: 1}}/>
     </Box>
   </Box>
}