import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import Window from './components/Window';

import './styles/reset.scss';
import './styles/classes.scss';
import './styles/fonts.scss';

const App = (): JSX.Element =>
  (
    <Desktop>
      <Window />
      <Taskbar />
    </Desktop>
  );

export default App;
