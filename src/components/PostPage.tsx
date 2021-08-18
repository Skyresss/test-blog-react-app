import styled from 'styled-components';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TypedPost from '../state/post-type';
const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5em;
`;
const PostPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const id: any = useParams();
  const postId = id.id;
  const { AddCommentAction, FindPostAction } = useActions();
  useEffect(() => {
    FindPostAction(Number(postId));
  }, [FindPostAction, postId]);

  const post: TypedPost = useTypedSelector(({ postsInfo: { post } }) => {
    return post;
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddCommentAction(post.id, inputValue);
  };

  return (
    <StyledCard>
      <div className="ui card">
        <div className="content">
          <h1 className="header">{post && post.title}</h1>
        </div>
        <div className="content">
          <span>{post && post.body}</span>
        </div>

        {post.comments &&
          post.comments.map((comment, index) => {
            return (
              <div key={index} className="content">
                {comment.body}
              </div>
            );
          })}

        <div className="content">
          <i className="comment icon"></i>
          {post.comments && post.comments.length} comments
        </div>
        <form onSubmit={onSubmit} className="ui large transparent input">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder="Add Comment..."
          />
        </form>
      </div>
    </StyledCard>
  );
};

export default PostPage;
