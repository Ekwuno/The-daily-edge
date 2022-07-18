import React, { useState } from 'react';
import {
	HStack,
	Text,
	VStack,
	IconButton,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Input,
	FormLabel,
	FormControl,
	Textarea,
} from '@chakra-ui/react';
import { AiFillLike, AiOutlineEdit, AiOutlineLike } from 'react-icons/ai';
import commentServices from '../services/commentServices';

const Comment = ({ comment }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [mainComment, setMainComment] = useState(comment);
	const [isClicked, setIsClicked] = useState(false);

	const handleUpdateComment = async (comment = mainComment) => {
		try {
			const updatedComment = await commentServices.updateComment(comment);
			setMainComment(updatedComment);
			onClose();
		} catch (error) {
			console.log('error');
		}
	};

	const handleLikes = async () => {
		let likes = mainComment.likes || 0;
		isClicked ? likes-- : likes++;
		await handleUpdateComment({ ...mainComment, likes });
		setIsClicked((isClicked) => !isClicked);
	};

	const handleChange = (e) => {
		setMainComment({
			...mainComment,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<VStack
			width="100%"
			height="100%"
			borderWidth={1}
			p={4}
			rounded="sm"
			align="flex-start"
		>
			<HStack align="center" justify="space-between" width="100%">
				<Text>{mainComment.comment}</Text>
				<IconButton
					icon={<AiOutlineEdit size={15} />}
					onClick={onOpen}
					aria-label="Edit button"
					variant="unstyled"
				/>
			</HStack>
			<Text as="i" fontSize="sm">
				- {mainComment.name}
			</Text>
			<HStack align="center" spacing={2}>
				<IconButton
					aria-label="Like button"
					variant="unstyled"
					icon={
						isClicked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />
					}
					onClick={handleLikes}
				/>
				<Text color="gray.500" fontSize="sm">
					{mainComment.likes} likes
				</Text>
			</HStack>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Comment</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<FormControl isRequired>
							<FormLabel htmlFor="name">Name</FormLabel>
							<Input
								id="name"
								name="name"
								type="text"
								value={mainComment.name}
								onChange={handleChange}
							/>
						</FormControl>
						<FormControl isRequired>
							<FormLabel htmlFor="comment">Comment</FormLabel>
							<Textarea
								id="comment"
								name="comment"
								type="text"
								value={mainComment.comment}
								onChange={handleChange}
							/>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost" onClick={() => handleUpdateComment()}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</VStack>
	);
};

export default Comment;
