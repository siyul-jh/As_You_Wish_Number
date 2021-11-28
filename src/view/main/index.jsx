import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/compoents/buttons';
const StyledSection = styled.section`
	padding: 1rem;
	.intro {
		font-weight: 900;
		text-shadow: 0 0 0.8rem #ffc709;
	}
	.start {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
export default function Section() {
	return (
		<StyledSection>
			<div className="intro">
				<h2>당신을 위한 선택이 준비되어 있습니다.</h2>
				<div className="start">
					<Link to={{ pathname: '/question', state: 1 }}>
						<Button size="large" radius={true} bold color="#ffc709">
							시작
						</Button>
					</Link>
				</div>
			</div>
		</StyledSection>
	);
}
