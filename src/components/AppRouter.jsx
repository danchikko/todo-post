import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import About from '../pages/About'
import Error from '../pages/Error'
import Login from '../pages/Login'
import PostIdPage from '../pages/PostIdPage'
import Posts from '../pages/Posts'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
	const {isAuth , isLoading } = useContext(AuthContext)
    
    if(isLoading) {
        return <Loader />
    }

	return isAuth ? (
		<Routes>
			<Route path='/about' element={<About />} />
			<Route path='posts' element={<Posts />} />
			<Route path='posts/:id' element={<PostIdPage />} />
			<Route path='*' element={<Error />} />
		</Routes>
	) : (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='*' element={<Login />} />
		</Routes>
	)
}

export default AppRouter
