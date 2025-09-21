import { Box } from '@mui/material'
import BookSection from '../components/book-components/BookSection'
import BookDetails from '../components/book-components/BookDetails'
import TrendingSkeleton from '../components/book-components/TrendingSkeleton'
import { useEffect, useState } from 'react'
import { fetchTrendingBooks, fetchBooksBySubject, delay } from '../services/bookAPI'

export default function Trending(){

const [trending, setTrending] = useState([]);
const [fiction, setFiction] = useState([]);
const [science, setScience] = useState([]);
const [history, setHistory] = useState([]);
const [loading, setLoading] = useState(true);
const [selectedBook, setSelectedBook] = useState(null);
const [modalOpen, setModalOpen] = useState(false);

const handleBookClick = (book, rating) => {
	setSelectedBook({ ...book, rating })
	setModalOpen(true)
}

const handleCloseModal = () => {
	setModalOpen(false)
	setSelectedBook(null)
}

useEffect(() => {
	const fetchData = async () => {
		try {
			setTrending(await fetchTrendingBooks())
		} catch (error) {
			console.error('Trending failed:', error)
			setTrending([])
		}
		
		await delay(1000)
		
		try {
			setFiction(await fetchBooksBySubject('fiction', 6))
		} catch (error) {
			console.error('Fiction failed:', error)
			setFiction([])
		}
		
		try {
			setScience(await fetchBooksBySubject('science', 6))
		} catch (error) {
			console.error('Science failed:', error)
			setScience([])
		}
		
		try {
			setHistory(await fetchBooksBySubject('history', 6))
		} catch (error) {
			console.error('History failed:', error)
			setHistory([])
		}
		
		setLoading(false)
	}

	fetchData()
}, [])

if (loading) return <TrendingSkeleton />

	return <Box>
		<BookSection 
			title="Trending Books Today" 
			books={trending} 
			showTrending={true} 
			maxBooks={12}
			onBookClick={handleBookClick}
		/>
		<BookSection 
			title="Popular Fiction" 
			books={fiction} 
			showTrending={false} 
			maxBooks={6}
			onBookClick={handleBookClick}
		/>
		<BookSection 
			title="Science and Technology" 
			books={science} 
			showTrending={false} 
			maxBooks={6}
			onBookClick={handleBookClick}
		/>
		<BookSection 
			title="History and Biography" 
			books={history} 
			showTrending={false} 
			maxBooks={6}
			onBookClick={handleBookClick}
		/>
		
		<BookDetails 
			open={modalOpen}
			onClose={handleCloseModal}
			book={selectedBook}
		/>
	</Box>
}