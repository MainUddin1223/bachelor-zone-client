export const getBaseUrl = (): string => {
	return process.env.BASE_URL || 'localhost:8000/api/v1';
};
