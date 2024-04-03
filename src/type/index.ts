export interface DataType {
	key: React.Key;
	delivery_date: string;
	status: string;
}
export interface MobileDataType {
	key: React.Key;
	details: Partial<DataType>;
}
