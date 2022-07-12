import { useState, useEffect } from 'react';
import {
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	VStack,
	Textarea,
	Button,
	useToast,
} from '@chakra-ui/react';

export function AddComment({ handleComment }) {
	const Toast = useToast();
	const [values, setValues] = useState({
		name: '',
		value: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			// Toast.success("Comment added successfully"); also add link to send request to page function
		} catch (error) {
			Toast.error('Error adding comment');
		}
	};

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value, // More context?? 
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<VStack spacing={8}>
				<FormControl>
					<FormLabel htmlFor="name"> Name</FormLabel>
					<Input
						id="name"
						name="name"
						type="text"
						placeholder="Obinna"
						value={values.name}
						onChange={handleChange}
					/>
				</FormControl>

				<FormControl>
					<FormLabel htmlFor="comment"> Comment</FormLabel>
					<Textarea
						id="comment"
						name="comment"
						type="text"
						placeholder="Share you thoughts with us"
						height={40}
						value={values.comment}
						onChange={handleChange}
					/>
					<FormHelperText>
						Make the comment as long as you'd like
					</FormHelperText>
				</FormControl>
                <Button type="submit">Send</Button>
			</VStack>
		</form>
	);
}
