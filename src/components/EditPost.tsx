import styled from 'styled-components';
import { useState } from 'react';
import { useActions } from '../hooks/use-actions';
import { useParams, useHistory } from 'react-router-dom';
const Form = styled.div`
  margin: 5em 1.5em;
`;

const EditPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { UpdatePostAction } = useActions();
  const id: any = useParams();
  const userId = id.id;
  const history = useHistory();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    UpdatePostAction(title, text, userId);
    history.push('/');
  };

  return (
    <Form>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            name="first-name"
            placeholder="Title"
          />
        </div>
        <div className="field">
          <label>Text</label>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>

        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    </Form>
  );
};

export default EditPost;
