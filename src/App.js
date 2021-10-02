import Section from './view/main/components/Section';
import './App.scss';
import Qna from './view/qna/qna';
import Layout from './view/common/components/layout';
import React, { createContext, useState } from 'react';
import { Switch } from 'react-router-dom';
// min-width : 600px;
// max-width : 1440px;
// min-height : 1080px;
export const AnswerContext = createContext(null);
function App() {
	const [state, setState] = useState({});

	return (
		<AnswerContext.Provider value={setState}>
			<React.Suspense
				fallback={
					<div className="loading">
						<div className="spinner" />
					</div>
				}
			>
				<Switch>
					<Layout exact path="/" name="App" component={Section} />
					<Layout exact path="/question" name="question" component={Qna} />
					<Layout exact path="/result" name="result" state={state} />
				</Switch>
			</React.Suspense>
		</AnswerContext.Provider>
	);
}

export default App;
