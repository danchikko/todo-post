import { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInpu'
import { AuthContext } from '../context'

const Login = () => {
	const { setIsAuth } = useContext(AuthContext)

	const login = (event) => {
		event.preventDefault()
		setIsAuth(true)
		localStorage('auth', 'true')
	}
	return (
		<div>
			<h1>Login page</h1>
			<form onSubmit={login}>
				<MyInput type='text' placeholder='User name' />
				<MyInput type='text' placeholder='Password' />
				<MyButton>Login</MyButton>
			</form>
		</div>
	)
}

export default Login
