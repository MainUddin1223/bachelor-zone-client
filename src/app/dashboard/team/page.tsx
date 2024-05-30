import TeamDetails from '@/components/Dashboard/TeamDetails/TeamDetails';
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout';
import React from 'react';
import Styles from './team.module.css';

const Team = () => {
	return (
		<DashboardLayout>
			<div className={Styles.container}>
				<TeamDetails />
			</div>
		</DashboardLayout>
	);
};

export default Team;