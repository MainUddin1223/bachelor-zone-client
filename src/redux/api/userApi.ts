import { baseApi } from './baseApi';

const userUrl = '/user';

const userApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getInfo: build.query({
			query: () => ({
				url: `${userUrl}/info`,
				method: 'GET',
			}),
			providesTags: ['user'],
		}),
	}),
});

export const { useGetInfoQuery } = userApi;
