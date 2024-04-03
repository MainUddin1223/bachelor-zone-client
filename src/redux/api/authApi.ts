import { baseApi } from './baseApi';

const authUrl = '/auth';

const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation({
			query: (loginData) => ({
				url: `${authUrl}/login`,
				method: 'POST',
				data: loginData,
			}),
			invalidatesTags: ['user'],
		}),
		signUp: build.mutation({
			query: (signUpData) => ({
				url: `${authUrl}/sign-up`,
				method: 'POST',
				data: signUpData,
			}),
			invalidatesTags: ['user'],
		}),
		changePassword: build.mutation({
			query: (changePasswordData) => ({
				url: `${authUrl}/change-password`,
				method: 'POST',
				data: changePasswordData,
			}),
			invalidatesTags: ['user'],
		}),
	}),
});

export const {
	useChangePasswordMutation,
	useLoginMutation,
	useSignUpMutation,
} = authApi;
