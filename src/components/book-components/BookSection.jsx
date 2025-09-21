import { Box, Typography } from '@mui/material'
import BookCard from './BookCard'

export default function BookSection({ title, books, showTrending = false, maxBooks = 6, onBookClick }) {
  return (
    <Box py={4} px={6} mb={4}>
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
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-start' }}>
        {books.slice(0, maxBooks).map((book, index) => (
          <BookCard 
            key={book.key} 
            book={book} 
            index={index}
            showTrending={showTrending}
            onClick={onBookClick}
          />
        ))}
      </Box>
    </Box>
  )
}