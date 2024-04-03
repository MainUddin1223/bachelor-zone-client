import { createSlice } from '@reduxjs/toolkit';
type IUserSlice = {
	userData: {
		name: string;
		id: string;
		phone: string;
		address: string;
		balance: number;
		team: string;
		teamLeader: string;
		leaderPhone: string;
	};
};

const initialState: IUserSlice = {
	userData: {
		name: '',
		id: 'string',
		phone: '',
		address: '',
		balance: 0,
		team: '',
		teamLeader: '',
		leaderPhone: '',
	},
};

export const userSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {
		addUserData: (state, action) => {
			state.userData = action.payload;
		},
	},
});
export const { addUserData } = userSlice.actions;

export default userSlice.reducer;
