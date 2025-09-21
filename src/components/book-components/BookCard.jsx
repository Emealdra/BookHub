import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Chip, Rating } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';

export default function BookCard({ book, index, showTrending, onClick }) {
  const randomStar = book.rating || (Math.random() * 5).toFixed(1);
  
  return (
    <Card sx={{ width: 280, height: 350, flex: '0 0 calc(16.666% - 16px)', cursor: 'pointer' }} onClick={() => onClick?.(book, randomStar)}>
      <CardMedia
        component="img"
        height="180"
        image={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 180px)', p: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {book.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          by {book.author_name[0]}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
         Published: {book.first_publish_year}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: showTrending ? 'space-between' : 'flex-end', alignItems: 'center', mt: 2 }}>
          {showTrending && (
            <Chip 
              icon={<TrendingUpIcon />} 
              label={`#${index + 1} Trending`} 
              size="small" 
            />
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
			 	<StarIcon sx={{color:'#FFD700', verticalAlign: 'middle'}}/>
            <Typography variant="body2">{randomStar}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
