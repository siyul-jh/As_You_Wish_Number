import styled from 'styled-components';
import React from 'react';
import Header from './header';
import Footer from './footer';
import { Route } from 'react-router-dom';
const Container = styled.div`
	width: 100%;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 90%;
	max-width: 1440px;
	border: 24px solid #e5b308dd;
	background-color: #00000050;
	z-index: 0;
`;
export default function Layout({ component: Component, name, ...rest }) {
	return (
		<Route
			{...rest}
			render={(routeProps) => (
				<Container>
					<Header />
					<Component {...routeProps} />
					<Footer type={name} />
				</Container>
			)}
		/>
	);
}
