import styled from 'styled-components';
const Button = styled.button`
	appearance: none;
	color: #fff;
	border: none;
	background-color: #ffc709;
	outline: none;
	:hover {
		color: #af890e;
		background: #e5b307;
	}
	:active {
		color: #ffc709;
		background: #af890e;
	}
`;
export default function Buttons({ color, size, bold, radius }) {
	let btnSize = buttonSize(size);
	return <Button style={{ backgroundColor: color, fontSize: btnSize.fontSize, padding: btnSize.buttonSize, fontWeight: bold && 'bold', borderRadius: radius && '8px' }}>시작</Button>;
}

const buttonSize = (size) => {
	let buttonSize, fontSize;
	switch (size) {
		case 'large':
			buttonSize = '16px 32px';
			fontSize = '21px';
			break;
		case 'medium':
			buttonSize = '14px 24px';
			fontSize = '16px';
			break;
		case 'small':
			buttonSize = '10px 18px';
			fontSize = '14px';
			break;
		default:
			buttonSize = '14px 24px';
			fontSize = '16px';
			break;
	}
	return { buttonSize, fontSize };
};
