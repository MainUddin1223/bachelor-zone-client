'use client';

import { Modal } from 'antd';

interface ConfirmModalProps {
	confirmLoading: boolean;
	id: number;
	action: 'pending' | 'confirmed';
	handleConfirm: (id: number, action: 'pending' | 'confirmed') => void;
	open: boolean;
	setOpen: (val: boolean) => void;
	title: string;
	description: string | undefined;
}

const ConfirmModal = ({
	confirmLoading,
	handleConfirm,
	id,
	action,
	open,
	setOpen,
	title,
	description,
}: ConfirmModalProps) => {
	const handleCancel = () => {
		setOpen(false);
	};
	const handleOk = async () => {
		await handleConfirm(id, action);
	};
	return (
		<Modal
			title={title}
			open={open}
			onOk={handleOk}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
		></Modal>
	);
};

export default ConfirmModal;
