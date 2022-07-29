import React, { useState } from 'react';
import {
	FormControl,
	FormLabel,
	FormHelperText,
	VStack,
	Textarea,
	Button,
	useToast,
} from '@chakra-ui/react';
import commentServices from 'services/commentServices';
import { Comment } from 'types';
import { useAuth } from 'context/AuthContext';
import Loading from './Loading';

interface Props {
	handleAddComment: (comment: Comment) => void;
}

const AddComment: React.FC<Props> = ({ handleAddComment }) => {
	const { user, loading } = useAuth();
	const toast = useToast();
	const initialState = {
		message: '',
		likes: 0,
		comments: [],
	};
	const [values, setValues] = useState(initialState);

	const handleChange = (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		console.log(values);
		setValues({
			...values,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const comment: Comment = await commentServices.postComment({user: user!, ...values});
			handleAddComment(comment); //Add the comment to the list of exsiting comments
			setValues(initialState);
			toast({
				title: 'Comment added',
				description: 'Your comment has been added',
				status: 'success',
				duration: 9000,
				isClosable: true,
				position: 'top-right',
			});
		} catch (error: any) {
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

	if (loading) {
		return <Loading />;
	}

	return (
			<form onSubmit={handleSubmit}>
				<VStack spacing={8} align="flex-start">
					<FormControl isRequired>
						<FormLabel htmlFor="message"> Comment</FormLabel>
						<Textarea
							id="message"
							name="message"
							placeholder="Share you thoughts with us"
							height={40}
							value={values.message}
							onChange={handleChange}
						/>
						<FormHelperText>
							Make the comment as long as you'd like
						</FormHelperText>
					</FormControl>
					<Button type="submit" disabled={!user}>
						Send
					</Button>
				</VStack>
			</form>
		)
};

export default AddComment;
