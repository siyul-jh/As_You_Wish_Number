import styled from 'styled-components';
const StyledHeader = styled.header`
	padding-top: 0.1rem;
	padding-bottom: 0.1rem;
	p {
		color: #ffc709;
		font-size: 2rem;
		font-weight: 900;
		text-shadow: 0 0 0.5rem #00000090;
	}
`;
export default function Header() {
	return (
		<StyledHeader>
			<p>오늘의 기분으로 알아보는 6개의 번호</p>
		</StyledHeader>
	);
}
