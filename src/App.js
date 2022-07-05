import { useEffect, useState } from 'react'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar'
import { AuthContext } from './context'
import './styles/App.css'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setIsLoading(false)
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				isLoading,
			}}
		>
			<Navbar />
			<AppRouter />
		</AuthContext.Provider>
	)
}

export default App
