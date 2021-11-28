import React, { useContext } from 'react';
import styled from 'styled-components';
import { AnswerContext } from '../../App';
const StyledSection = styled.section`
	padding: 1rem;
	.intro {
		font-weight: 900;
		text-shadow: 0 0 0.8rem #ffc709;
	}
`;
export default function Result() {
	const { state } = useContext(AnswerContext);
	console.log('state', state);
	return (
		<StyledSection>
			<div className="intro">
				<h2>당신의 기분은?</h2>
			</div>
		</StyledSection>
	);
}
