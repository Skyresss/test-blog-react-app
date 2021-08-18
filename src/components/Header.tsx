import { Link } from 'react-router-dom';
export const Header: React.FC = () => {
  return (
    <div className="ui top fixed menu">
      <Link to="/" className="item">
        Home
      </Link>
    </div>
  );
};
