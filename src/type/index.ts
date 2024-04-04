export interface DataType {
	key: React.Key;
	id: number;
	delivery_date: string;
	status: string;
}
export interface MobileDataType {
	key: React.Key;
	details: Partial<DataType>;
}
