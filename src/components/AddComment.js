import { useState } from 'react';
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
import commentServices from '../services/commentServices';

export function AddComment({ handleAddComment }) {
	const toast = useToast();
	const [values, setValues] = useState({
		name: '',
		comment: '',
	});

	const handleChange = e => {
		console.log(values)
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await commentServices.postComment(values);
			// handleAddComment(comment);
			setValues({ 
				name: '',
			    comment: ''
			 });
			toast({ 
				title: 'Comment added',
				description: 'Your comment has been added',
				status: 'success',
				duration: 9000,
				isClosable: true,
				position: 'top-right',
			});
		} catch (error) {
			console.log(error.message);
			toast({
				title: 'Error adding comment',
				description: 'Something went wrong',
				variant: 'left-accent',
				position: 'top-right',
				status: 'error',
				duration: 4000,
				isClosable: true,
			});
		}
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
