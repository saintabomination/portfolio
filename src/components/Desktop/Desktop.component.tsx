import './Desktop.styles.scss';

type Props = {
  children: React.ReactNode;
};

const Desktop = ({ children }: Props): JSX.Element =>
  (
    <div className="desktop">
      {children}
    </div>
  );

export default Desktop;
