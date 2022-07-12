import React, { useState } from 'react';
import { HStack, Text, VStack, IconButton } from '@chakra-ui/react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

const Comment = ({ comment }) => {
	const [isClicked, setIsClicked] = useState(false);
	return (
		<VStack
			width="100%"
			height="100%"
			borderWidth={1}
			p={4}
			rounded="sm"
			align="flex-start"
		>
			<Text>{comment.comment}</Text>
			<Text as="i" fontSize="sm">
				- {comment.name}
			</Text>
			<HStack align="center" spacing={2}>
				<IconButton
					aria-label="like button"
					variant="unstyled"
					icon={
						isClicked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />
					}
					onClick={() => setIsClicked(!isClicked)}
				/>
				<Text color="gray.500" fontSize="sm">
					{comment.likes || 0} likes
				</Text>
			</HStack>
		</VStack>
	);
};

export default Comment;
