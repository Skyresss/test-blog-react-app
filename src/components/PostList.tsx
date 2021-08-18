import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useEffect } from 'react';
import Post from './Post';
import TypedPost from '../state/post-type';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 4em 1.5em;
`;

const PostList: React.FC = () => {
  const { LoadAllPostsAction } = useActions();

  const posts: TypedPost[] = useTypedSelector(({ postsInfo: { posts } }) => {
    if (posts) {
      return posts;
    } else return [];
  });
  useEffect(() => {
    LoadAllPostsAction();
  }, [LoadAllPostsAction]);

  return (
    <Wrapper>
      <div className="ui cards">
        {posts &&
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
              />
            );
          })}
      </div>
    </Wrapper>
  );
};

export default PostList;
