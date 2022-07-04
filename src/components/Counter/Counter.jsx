import { useState } from "react"

const Counter = () => {
	const [likes, setLikes] = useState(0)
	const [value, setValue] = useState('Text')

	const increment = () => {
		setLikes(likes + 1)
	}

	const decrement = () => {
		setLikes(likes - 1)
	}
	return (
		<div>
			<h1>{likes}</h1>
			<h2>{value}</h2>
			<input
				type='text'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}

export default Counter;
