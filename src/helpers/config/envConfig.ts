export const getBaseUrl = (): string => {
	return process.env.BASE_URL || 'http://localhost:8000/api/v1';
};
