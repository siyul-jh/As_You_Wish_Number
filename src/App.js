import Header from './component/Header';
import Section from './component/Section';
import Footer from './component/Footer';
import styled from 'styled-components';
import './App.scss';
// min-width : 600px;
// max-width : 1440px;
// min-height : 1080px;
const Container = styled.div`
	width: 100%;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 80%;
	max-width: 1440px;
	border: 24px solid #e5b308dd;
	background-color: #00000050;
	z-index: 0;
`;
function App() {
	return (
		<Container>
			<Header />
			<Section />
			<Footer />
		</Container>
	);
}

export default App;
