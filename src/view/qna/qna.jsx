import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { AnswerContext } from '../../App';
import { qnaList } from '../../common/index';
const StyledSection = styled.section`
	padding: 1rem;
	.intro {
		font-weight: 900;
		text-shadow: 0 0 0.8rem #ffc709;
		.start button {
			padding: 1rem 3rem;
			margin-top: 3rem;
			border: none;
			border-radius: 0.5rem;
			color: #fff;
			background: #ffc709;
			font-size: 2rem;
			outline: none;
			:hover {
				color: #af890e;
				background: #e5b307;
			}
			:active {
				color: #ffc709;
				background: #af890e;
			}
		}
	}
	.answer-list {
		padding: 0;
		margin: 0 20%;
		flex-wrap: wrap;
		display: flex;
		flex-direction: column;
		& .answer {
			margin: 1rem 0;
		}
		& .answer button {
			width: 100%;
			font-size: 18px;
			padding: 1rem;
			border: none;
			border-radius: 2rem;
			outline: none;
			color: #333;
			background-color: #ffffff;
			word-break: break-word;
			/* overflow: hidden;
			text-overflow: ellipsis;
			white-space: pre; */
			:hover {
				color: #fff;
				font-weight: 900;
				background-color: #3c3c3c20;
			}
			:active {
				color: #ccc;
				background-color: #00000020;
			}
		}
	}
	& .submit button {
		width: 280px;
		padding: 0.5rem 1rem;
		margin-top: 2rem;
		border: none;
		color: #ffc709;
		background: #00000080;
		font-size: 21px;
		outline: none;
		:hover {
			color: #fff;
			background: #e5b307;
		}
		:active {
			color: #af890e;
			background: #ffc709;
		}
	}
`;
export default function Qna() {
	const context = useContext(AnswerContext);
	const history = useHistory();
	const loaction = useLocation();
	const data = qnaList[loaction.state - 1];
	console.log(history);
	const onClickHandler = (number) => {
		console.log(number);
		context({ key: data.q, value: number });
		history.push({ pathname: '/question', state: loaction.state + 1 });
	};
	return (
		<StyledSection>
			<div className="qna">
				<h2 className="q">{data.q}</h2>
				<div className="a">
					<div className="answer-list">
						{data.a.map((answer) => (
							<div key={answer.number} className="answer">
								<button onClick={() => onClickHandler(answer.number)}>{answer.answer}</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</StyledSection>
	);
}
