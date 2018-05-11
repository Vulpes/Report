import { StackNavigator } from 'react-navigation';

import Loading from './loading';
import Principal from './principal';
import ComFoto from './comFoto';
import SemFoto from './semFoto';

//rotas
const App = StackNavigator({

	Loading: { screen: Loading},
	Principal: { screen: Principal},
	ComFoto: { screen: ComFoto },
	SemFoto: { screen: SemFoto }

});

export default App;