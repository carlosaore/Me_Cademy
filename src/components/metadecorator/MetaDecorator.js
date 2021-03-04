import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MetaDecorator = ({ title, description }) => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Helmet>
		</HelmetProvider>
	);
};

ReactDOM.hydrate(
	MetaDecorator,
	document.getElementById('root')
);

export default MetaDecorator;