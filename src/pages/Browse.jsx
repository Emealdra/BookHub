import { Box, TextField, Button, CircularProgress, Typography } from '@mui/material'
import { useState } from 'react'
import { fetchBooksBySubject } from '../services/bookAPI'
import BookSection from '../components/book-components/BookSection'
import BookDetails from '../components/book-components/BookDetails'
import BookSkeleton from '../components/book-components/BookSkeleton'
import SearchIcon from '@mui/icons-material/Search'

export default function Browse(){
	const [searchInput, setSearchInput] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [loading, setLoading] = useState(false)
	const [selectedBook, setSelectedBook] = useState(null)
	const [modalOpen, setModalOpen] = useState(false)

	const handleSearch = async () => {
		if (!searchInput.trim()) return
		
		setLoading(true)
		try {
			setSearchResults(await fetchBooksBySubject(searchInput, 24))
		} catch (error) {
			console.error('Search failed:', error)
		} finally {
			setLoading(false)
		}
	}

	const handleBookClick = (book, rating) => {
		setSelectedBook({ ...book, rating })
		setModalOpen(true)
	}

	const handleCloseModal = () => {
		setModalOpen(false)
		setSelectedBook(null)
	}

	return <Box sx={{ p: 4 }}>
		<Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center' }}>
			<TextField
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
				placeholder="Search by subject"
				variant="outlined"
				sx={{ 
					width: 400,
					'& .MuiInputBase-input::selection': {
						backgroundColor: 'white',
						color: 'black'
					}
				}}
				onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
			/>
			<Button
				variant="contained"
				startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SearchIcon />}
				onClick={handleSearch}
				disabled={loading || !searchInput.trim()}
				sx = {{backgroundColor: 'white'}}
			>
				{loading ? 'Searching...' : 'Search'}
			</Button>
		</Box>

		{loading && searchInput && (
			<Box sx={{ py: 4, px: 6, mb: 4 }}>
				<Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
					Searching...
				</Typography>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'flex-start' }}>
					{Array.from({ length: 12 }).map((_, index) => (
						<BookSkeleton key={index} showTrending={false} />
					))}
				</Box>
			</Box>
		)}

		{searchResults.length > 0 && !loading && (
			<BookSection
				title={`Search Results for "${searchInput}"`}
				books={searchResults}
				showTrending={false}
				maxBooks={24}
				onBookClick={handleBookClick}
			/>
		)}

		{!loading && searchResults.length === 0 && searchInput && (
			<Typography variant="h6" sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
				No books found for subject: "{searchInput}".
			</Typography>
		)}

		<BookDetails
			open={modalOpen}
			onClose={handleCloseModal}
			book={selectedBook}
		/>
	</Box>
}