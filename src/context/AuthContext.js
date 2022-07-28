import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import authService from '../services/authService';
import Loading from '../components/Loading';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const toast = useToast();

	const getCurrentUser = async () => {
		const response = await authService.getUser();
		if (response) {
			setUser(response);
		}
		setLoading(false);
	};

	useEffect(() => {
		getCurrentUser();
	}, []);

	const login = async () => {
		try {
			const response = await authService.loginViaGithub();
			console.log('response', response);
			setUser(response.user);
			localStorage.setItem('user', JSON.stringify(response.user));
			window.history.pushState({}, null, process.env.REACT_APP_REDIRECT_URL);
		} catch (error) {
			toast({
				title: 'Error',
				variant: 'left-accent',
				position: 'top-right',
				description: 'Error logging in',
				status: 'error',
				isClosable: true,
				duration: 4000,
			});
		}
	};

	const logout = () => {
		localStorage.removeItem('user');
		setUser(null);
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<authContext.Provider value={{ login, user, loading, logout }}>
			{children}
		</authContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(authContext);
};
