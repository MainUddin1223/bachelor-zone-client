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
		getUpcomingOrders: build.query({
			query: () => ({
				url: `${userUrl}/order`,
				method: 'GET',
			}),
			providesTags: ['user'],
		}),
		getOrderHistory: build.query({
			query: () => ({
				url: `${userUrl}/order-history`,
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
		cancelOrder: build.mutation({
			query: (id) => ({
				url: `${userUrl}/order/${id}`,
				method: 'POST',
			}),
			invalidatesTags: ['user'],
		}),
		confirmOrder: build.mutation({
			query: (id) => ({
				url: `${userUrl}/order/${id}`,
				method: 'PATCH',
			}),
			invalidatesTags: ['user'],
		}),
		getTransactionHistory: build.query({
			query: () => ({
				url: `${userUrl}/transaction`,
				method: 'GET',
			}),
			providesTags: ['user'],
		}),
		getTeamDetails: build.query({
			query: () => ({
				url: `${userUrl}/team-details`,
				method: 'GET',
			}),
			providesTags: ['user'],
		}),
	}),
});

export const {
	useGetInfoQuery,
	useOrderMealMutation,
	useGetOrderHistoryQuery,
	useGetUpcomingOrdersQuery,
	useCancelOrderMutation,
	useConfirmOrderMutation,
	useGetTransactionHistoryQuery,
	useGetTeamDetailsQuery,
} = userApi;
