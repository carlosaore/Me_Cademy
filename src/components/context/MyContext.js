import React, { createContext, useState } from 'react';

export const MyContext = createContext();
export const MyContextProvider = (props) => {
	const [open, setOpen] = useState(false);
	const [hover, setHover] = useState(false);

	return (
		<MyContext.Provider value={{ open, setOpen, hover, setHover }}>
			{props.children}
		</MyContext.Provider>
	);
};
