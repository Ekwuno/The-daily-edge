import React from 'react';
import { Button, Flex, Icon, Image, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { useAuth } from '../context/AuthContext';
import { getFormattedGithubUrl } from '../utils/urlFormatter';

const Navbar: React.FC = () => {
	const { user, logout } = useAuth();
	return (
		<Flex align="center" justify="space-between" px={4} py={2} boxShadow="sm">
			<Image
				src="https://b0.thejournal.ie/desktop/i/thedailyedge/landscape.png"
				width="50px"
				height="50px"
				alt="The Daily Edge"
				objectFit="cover"
				rounded="full"
			/>
			{user ? (
				<Flex gap={4}>
					<Image
						src={user.avatar_url}
						alt={user.name}
						width="40px"
						height="40px"
						rounded="full"
					/>
					<Button
						backgroundColor="black"
						sx={{
							textDecoration: 'none',
							':hover': {
								textDecoration: 'none',
								backgroundColor: 'black',
							},
						}}
						color="white"
						leftIcon={<Icon as={MdLogout} />}
						onClick={logout}
					>
						Logout
					</Button>
				</Flex>
			) : (
				<Button
					as={Link}
					href={getFormattedGithubUrl()}
					backgroundColor="black"
					sx={{
						textDecoration: 'none',
						':hover': {
							textDecoration: 'none',
							backgroundColor: 'black',
						},
					}}
					color="white"
					leftIcon={<Icon as={AiFillGithub} />}
				>
					Login
				</Button>
			)}
		</Flex>
	);
};

export default Navbar;
