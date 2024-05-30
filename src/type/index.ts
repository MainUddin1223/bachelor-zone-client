export interface DataType {
	key: React.Key;
	id: number;
	delivery_date: string;
	status: string;
}
export interface TransactionDataType {
	key: React.Key;
	id: number;
	date: string;
	transaction_type: string;
	amount: number;
	description: string;
}
export interface MobileDataType {
	key: React.Key;
	details: Partial<DataType>;
}
export interface IMemberDataType {
	key: React.Key;
	id: number;
	user: {
		name: string;
		phone: string;
	};
}
export interface IOrderList {
	user_name: string;
	user_phone: string;
}
export interface IOrderDataType {
	key: React.Key;
	id: number;
	delivery_date: string;
	order_count: number;
	status: string;
	orderList: IOrderList[];
}
