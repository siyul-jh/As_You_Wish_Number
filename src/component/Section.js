import styled from 'styled-components';
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
`;
export default function Section() {
	return (
		<StyledSection>
			<div className='intro'>
				<h2>당신을 위한 선택이 준비되어 있습니다.</h2>
				<div className='start'>
					<button>시작</button>
				</div>
			</div>
		</StyledSection>
	);
}
