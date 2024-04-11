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
