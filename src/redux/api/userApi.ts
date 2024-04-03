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
		orderMeal: build.mutation({
			query: (data) => ({
				url: `${userUrl}/order`,
				method: 'POST',
				data,
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const { useGetInfoQuery, useOrderMealMutation } = userApi;
