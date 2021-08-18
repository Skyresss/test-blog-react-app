import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/use-actions';
export interface PostProps {
  title: string;
  body: string;
  id: number;
}

const DeleteButton = styled.i`
  right: 0;
  bottom: 0;
  position: absolute;
`;
const EditButton = styled.i`
  right: 30px;
  bottom: 0;
  position: absolute;
  font-size: 1.7em !important;
`;
const Wrapper = styled.div`
  position: relative;
  height: 35px;
`;

const Post: React.FC<PostProps> = ({ title, body, id }) => {
  const { DeletePostAction } = useActions();
  return (
    <Link className="ui link card" to={`/post/${id}`}>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">
          <p>{body}</p>
        </div>
      </div>
      <Wrapper>
        <DeleteButton
          onClick={(e) => {
            e.preventDefault();
            DeletePostAction(id);
          }}
          className="close red big icon"
        ></DeleteButton>
        <Link to={`/edit-post/${id}`}>
          <EditButton className="circle pencil alternate icon"></EditButton>
        </Link>
      </Wrapper>
    </Link>
  );
};

export default Post;
