import { useAppSelector } from '../../hooks';

const Post = () => {
  const posts = useAppSelector((state) => state.post);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.title}</div>
          <div>{post.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Post;
