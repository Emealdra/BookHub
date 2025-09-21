import { Box, Button, Typography, CircularProgress } from '@mui/material'
import { useState } from 'react';
import { fetchBooksBySubject, delay } from '../services/bookAPI';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import BookSection from '../components/book-components/BookSection';
import BookDetails from '../components/book-components/BookDetails';

export default function Random(){

const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
const [selectedBook, setSelectedBook] = useState(null);
const [modalOpen, setModalOpen] = useState(false);

const subjects = [
  'fiction', 'science', 'history', 
  'mystery', 'romance', 'fantasy', 
  'biography', 'adventure', 'thriller', 
  'comedy', 'drama', 'poetry'];

const handleSurpriseMe = async () => {
	setLoading(true);
	setError(false);
	try {
		await delay(500);
		const subject = subjects[currentSubjectIndex];
		setBooks(await fetchBooksBySubject(subject, 12));
		setCurrentSubjectIndex((prev) => (prev + 1) % subjects.length);
	} catch (error) {
		console.error('Error fetching random books:', error);
		setError(true);
		setBooks([]);
	} finally {
		setLoading(false);
	}
};

const handleBookClick = (book, rating) => {
	setSelectedBook({ ...book, rating });
	setModalOpen(true);
};

const handleCloseModal = () => {
	setModalOpen(false);
	setSelectedBook(null);
};	

	return (
		<Box sx={{ 
			display: 'flex', 
			flexDirection: 'column', 
			alignItems: 'center', 
			justifyContent: 'center', 
			minHeight: '70vh',
			textAlign: 'center',
			gap: 2,
			p: 4
		}}>
			<Typography 
				variant='h4' 
				sx={{ 
					fontWeight: 'bold',
					
				}}
			>
				Random Book Discovery
			</Typography>
			
			<Typography 
				variant='subtitle' 
				sx={{ 
					color: 'text.secondary',
					mb: 2
				}}
			>
				Discover new books with our surprise selection
			</Typography>
			
			<Button 
				variant='contained' 
				startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <ShuffleIcon />}
				onClick={handleSurpriseMe}
				disabled={loading}
				sx={{
					py: 2,
					px: 4,
					fontSize: '1.2rem',
					borderRadius: 3,
					backgroundColor: 'white'
				}}
			>
				{loading ? 'Finding Books...' : 'Surprise Me!'}
			</Button>
			
			{error && (
				<Typography variant="body1" sx={{ color: 'error.main', mt: 2 }}>
					Failed to load books. Try again!
				</Typography>
			)}

			{books.length > 0 && !error && (
				<BookSection 
					books={books}
					showTrending={false}
					maxBooks={12}
					onBookClick={handleBookClick}
				/>
			)}
			
			<BookDetails 
				open={modalOpen}
				onClose={handleCloseModal}
				book={selectedBook}
			/>
		</Box>
	)
}