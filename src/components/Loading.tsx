import React from 'react';
import { chakra, Flex, Icon } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: isValidMotionProp,
});

const Loading:React.FC = () => {
	return (
		<ChakraBox
			as={Flex}
			justify="center"
			animate={{ rotate: 360 }}
			// transition={{ duration: 2 }}
		>
			<Icon as={AiOutlineLoading3Quarters} />
		</ChakraBox>
	);
};

export default Loading;
