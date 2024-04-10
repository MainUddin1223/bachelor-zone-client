'use client';
import Styles from './TeamInfo.module.css';
const TeamInfo = ({ teamInfo }: { teamInfo: any }) => {
	const { name, member, due_boxes, order } = teamInfo;
	return (
		<div className={Styles.container}>
			<h2 className={Styles.info}>Team : {name}</h2>
			<h3 className={Styles.info}>Total Member : {member}</h3>
			<h3 className={Styles.info}>Today's Order : {order}</h3>
			<h3 className={Styles.info}>Due Boxes : {due_boxes}</h3>
		</div>
	);
};

export default TeamInfo;
