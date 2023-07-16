import './components.scss';
import React, { useState } from 'react';

export interface DashboardProps {
	sidebar: JSX.Element[]
    views: JSX.Element[]
}

function Dashboard({sidebar, views}: DashboardProps) {
	const [view, openView] = useState<React.Key|null>(sidebar[0].key);

	return (
		<div className='dashboard'>
			<div className='sidebar'>
				{sidebar && sidebar.map(
					(comp) => <comp.type key={comp.key} onClick={() => openView(comp.key)} {...comp.props} />
				)}
			</div>
			<div className='view'>
				{views.find(cView => cView.key == view)}
			</div>
		</div>
	);
}

export default Dashboard;
