import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	width: 100%;
	margin-bottom: 0.5rem;
	display: flex;
	justify-content: center;
	align-self: center;
	& .wrapper {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		color: #ffc709;
		& span {
			padding: 0 0.3rem;
		}
	}
	& .wrapper__back {
		flex: 2;
	}
	& .mode button {
		padding: 0.5rem 1rem;
		border: none;
		color: #fff;
		background: #ffc709;
		font-size: 18px;
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
`;
export default function Footer({ type }) {
	const history = useHistory();
	return (
		<StyledFooter>
			{type === 'App' ? (
				<>
					<div className="wrapper version">
						<span>Version :</span>
						<span>0.0.1</span>
					</div>
					<div className="wrapper mode">
						<button>Night Mode</button>
					</div>
				</>
			) : (
				<>
					<div className="wrapper mode">
						<button>Night Mode</button>
					</div>
					<div className="wrapper__back mode">
						<button onClick={() => history.goBack()}>뒤로</button>
					</div>
				</>
			)}
			<div className="wrapper git">
				<span>
					<svg height="24" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true">
						<path
							fill="#e5b307"
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
						></path>
					</svg>
				</span>
				<span>by. siyul-jh</span>
			</div>
		</StyledFooter>
	);
}
