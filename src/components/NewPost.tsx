import styled from 'styled-components';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../hooks/use-actions';

const Form = styled.div`
  margin: 5em 1.5em;
`;

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { CreateNewPostAction } = useActions();
  const history = useHistory();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await CreateNewPostAction(title, text);
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

export default NewPost;
