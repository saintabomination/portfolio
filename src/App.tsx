import Desktop from './components/Desktop.component';
import Taskbar from './components/Taskbar.component';

import './styles/reset.scss';

const App = (): JSX.Element =>
  (
    <Desktop>
      <Taskbar />
    </Desktop>
  );

export default App;
