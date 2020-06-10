import { useState, useEffect } from 'react';

export default () => {
	const [lat, setLat] = useState(null);
	const [long, setLong] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			},
			error => setErrorMessage(error.message)
		);
	}, []);

	return [lat, long, errorMessage];
};

// intended use as follows:
// const [lat, long, errorMessage] = useLocation();
