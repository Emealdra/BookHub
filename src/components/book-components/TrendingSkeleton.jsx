import { Box, Typography } from '@mui/material'
import BookSkeleton from './BookSkeleton'

const sectionTitles = [
  'Trending Books Today',
  'Popular Fiction', 
  'Science and Technology',
  'History and Biography'
]

export default function TrendingSkeleton() {
  return (
    <Box>
      {Array.from({ length: 4 }).map((_, sectionIndex) => (
        <Box key={sectionIndex} sx={{ py: 4, px: 6, mb: 4 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 3, 
              textAlign: 'left',
              color: 'text.primary',
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            {sectionTitles[sectionIndex]}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-start' }}>
            {Array.from({ length: sectionIndex === 0 ? 12 : 6 }).map((_, index) => (
              <BookSkeleton key={index} showTrending={sectionIndex === 0} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}