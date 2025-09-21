import axios from 'axios'

const addRatings = (books) => books.map(book => ({
  ...book,
  rating: (Math.random() * 5).toFixed(1)
}))

export const fetchTrendingBooks = async () => {
  const response = await axios.get('https://openlibrary.org/trending/daily.json')
  return addRatings(response.data.works || [])
}

export const fetchBooksBySubject = async (subject, limit = 6) => {
  const response = await axios.get(`https://openlibrary.org/search.json?subject=${subject}&limit=${limit}`)
  return addRatings(response.data.docs || [])
}

export const fetchBookDetails = async (bookKey) => {
  const response = await axios.get(`https://openlibrary.org${bookKey}.json`)
  return response.data
}

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))