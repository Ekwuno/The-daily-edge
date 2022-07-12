import { Heading, VStack } from '@chakra-ui/react';
import Comment from './Comment';

export default function CommentsList({ comments }) {
	return (
		<VStack spacing={8} w="100%">
			{comments.length === 0 ? (
				<Heading size="xl">No comments added</Heading>
			) : (
				comments.map((comment) => (
					<Comment key={comment.uuid} comment={comment} />
				))
			)}
		</VStack>
	);
}
