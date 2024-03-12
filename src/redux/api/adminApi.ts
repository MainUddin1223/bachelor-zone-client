import { baseApi } from './baseApi';

const adminUrl = '/admin';

const adminApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createCategory: build.mutation({
			query: (category: any) => ({
				url: `${adminUrl}/add-category`,
				method: 'POST',
				data: category,
			}),
			invalidatesTags: ['admin'],
		}),
		addQuiz: build.mutation({
			query: (data) => ({
				url: `${adminUrl}/add-quiz/${data.categoryId}`,
				method: 'POST',
				data: data.quizData,
			}),
			invalidatesTags: ['admin'],
		}),
		getQuestionList: build.query({
			query: () => ({
				url: `${adminUrl}/questions`,
				method: 'GET',
			}),
			providesTags: ['performer', 'admin'],
		}),
		getStatics: build.query({
			query: () => ({
				url: `${adminUrl}/get-statics`,
				method: 'GET',
			}),
			providesTags: ['admin'],
		}),
	}),
});

export const {
	useCreateCategoryMutation,
	useAddQuizMutation,
	useGetStaticsQuery,
} = adminApi;
