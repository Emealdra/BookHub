import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Rating, Chip, CircularProgress } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { fetchBookDetails } from '../../services/bookAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: 700 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
  maxHeight: '80vh',
  overflow: 'auto'
};

export default function BookDetails({ open, onClose, book }) {
  const [bookDetails, setBookDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const randomRating = book?.rating || '0.0';
  
  React.useEffect(() => {
    if (book && open) {
      const getBookDetails = async () => {
        setLoading(true);
        try {
          const details = await fetchBookDetails(book.key);
          setBookDetails(details);
        } catch {
          setBookDetails(null);
        } finally {
          setLoading(false);
        }
      };
      getBookDetails();
    }
  }, [book, open]);
  
  if (!book) return null;
  const subjects = bookDetails?.subjects?.slice(0, 3) || book.subject?.slice(0, 3) || ['General'];
  const description = bookDetails?.description?.value || bookDetails?.description || book.first_sentence?.join(' ') || 'No description available.';
  
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
		
      <Box sx={style}>
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>

          <Box sx={{ flexShrink: 0 }}>
            <img 
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              style={{ 
                width: '200px', 
                height: '300px', 
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <Typography id="book-title" variant="h5" component="h2" sx={{ mb: 1.5 }}>
              {book.title}
            </Typography>
            
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1.5 }}>
              by {book.author_name?.join(', ') || 'Unknown Author'}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <StarIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body2">{randomRating}</Typography>
              <Rating value={parseFloat(randomRating)} precision={0.1} size="small" readOnly />
            </Box>
            
            <Box sx={{ mb: 1.5 }}>
              <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 'bold' }}>
                Subjects:
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                {subjects.map((subject, index) => (
                  <Chip key={index} label={subject} size="small" variant="outlined" />
                ))}
              </Box>
            </Box>
            
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 'bold' }}>
                Description:
              </Typography>
              {loading ? (
                <CircularProgress size={20} />
              ) : (
                <Box>
                  <Typography id="book-description" variant="body2" sx={{ color: 'text.secondary' }}>
                    {showFullDescription ? description : description.slice(0, 200) + (description.length > 200 ? '...' : '')}
                  </Typography>
                  {description.length > 200 && (
                    <Typography 
                      variant="body2" 
                      sx={{ color: 'primary.main', cursor: 'pointer', mt: 1 }}
                      onClick={() => setShowFullDescription(!showFullDescription)}
                    >
                      {showFullDescription ? 'Read Less' : 'Read More'}
                    </Typography>
                  )}
                </Box>
              )}
            </Box>
            
            {/* Additional Info */}
            <Box sx={{ mt: 2, pt: 1.5, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                First published: {book.first_publish_year || book.publish_year?.[0] || 'Unknown'}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Editions: {book.edition_count || 'Unknown'}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
