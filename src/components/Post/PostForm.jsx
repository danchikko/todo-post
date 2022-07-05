import { useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInpu'

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' })

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			...post,
			id: Date.now(),
		}
		create(newPost)
		setPost({ title: '', body: '' })
	}
	return (
		<form>
			<MyInput
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				value={post.title}
				type='text'
				placeholder='name'
			/>
			<MyInput
				onChange={(e) => setPost({ ...post, body: e.target.value })}
				value={post.body}
				type='text'
				placeholder='description'
			/>
			<MyButton onClick={addNewPost}>create</MyButton>
		</form>
	)
}

export default PostForm
