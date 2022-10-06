import './Desktop.styles.scss';

type Props = {
  children: React.ReactNode;
};

const Desktop = ({ children }: Props): JSX.Element =>
  (
    <div className="desktop">
      <h1>Desktop</h1>
      {children}
    </div>
  );

export default Desktop;
