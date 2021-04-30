import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ComingSoon from "./pages/ComingSoon";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<ComingSoon />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
