import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

const Navbar = () => {
	const { setIsAuth } = useContext(AuthContext)

	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}
	return (
		<div className='navbar'>
			<MyButton onClick={logout}>Close</MyButton>
			<div className='navenar__linksv'>
				<Link to='/about'>About the site</Link>
				<Link to='/posts'>Posts</Link>
			</div>
		</div>
	)
}

export default Navbar
