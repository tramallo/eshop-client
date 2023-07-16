
export interface ProfileProps { 
	picture?: string, 
	name?: string, 
	email?: string
}

function Profile({picture, name, email}: ProfileProps) {

	return (
		<div className='profile'>
			<img src={picture} />
			<h1>{name}</h1>
			<h2>{email}</h2>
		</div>
	);
}

export default Profile;