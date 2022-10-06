import './Taskbar.styles.scss';

const Taskbar = (): JSX.Element =>
  (
    <div className="taskbar">
      <div className="start-button black-border">
        <img src="/img/win-logo.png" alt="Windows Logo" />
        <span className="start-button text">Start</span>
      </div>
    </div>
  );

export default Taskbar;
