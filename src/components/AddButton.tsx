import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.i`
  right: 0;
  bottom: 10px;
  position: fixed;
  margin: 10px;
`;

const AddButton: React.FC = () => {
  return (
    <Link to="create-post">
      <Button className="plus circle icon huge"></Button>
    </Link>
  );
};
export default AddButton;
