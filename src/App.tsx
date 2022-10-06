import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';

import './styles/reset.scss';
import './styles/classes.scss';
import './styles/fonts.scss';

const App = (): JSX.Element =>
  (
    <Desktop>
      <Taskbar />
    </Desktop>
  );

export default App;
