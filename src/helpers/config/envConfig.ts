export const getBaseUrl = (): string => {
	return (
		process.env.BASE_URL || 'https://bachelor-zone-server.vercel.app/api/v1'
	);
};
