import React from 'react';

const UpdateMealForm = ({ data }: { data: any }) => {
	console.log(data);
	return <div>{data.key}</div>;
};

export default UpdateMealForm;
