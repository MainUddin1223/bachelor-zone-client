export interface DataType {
	key: React.Key;
	date: string;
	dinner: number;
	lunch: number;
	lunch_tiffin: number;
	dinner_tiffin: number;
	order_date: string;
}
export interface MobileDataType {
	key: React.Key;
	details: Partial<DataType>;
}
