import { useState } from 'react';
import styled from 'styled-components';
import { qnaList } from '../../../common/index';
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
		list-style: none;
		& .answer button {
			width: 100%;
			font-size: 18px;
			padding: 1rem;
			margin: 1rem 0;
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
export default function Section() {
	const [question, setQuestion] = useState(0);
	const [answer, setAnswer] = useState(0);
	console.log(qnaList);
	return (
		<StyledSection>
			<div className="intro">
				<h2>당신을 위한 선택이 준비되어 있습니다.</h2>
				<div className="start">
					<button>시작</button>
				</div>
			</div>
			<div className="qna">
				<h2 className="q">Q1. 질문</h2>
				<div className="a">
					<ul className="answer-list">
						<li className="answer">
							<button>1</button>
						</li>
						<li className="answer">
							<button>2</button>
						</li>
						<li className="answer">
							<button>3</button>
						</li>
						<li className="answer">
							<button>4</button>
						</li>
						<li className="answer">
							<button>5</button>
						</li>
					</ul>
				</div>
				<div className="submit">
					<button>완료</button>
				</div>
			</div>
		</StyledSection>
	);
}
