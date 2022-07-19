import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addPost } from './postSlice';

const AddPostForm = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        addPost({
          id: Math.random().toString(36).substring(2, 11),
          title,
          content,
        }),
      );

      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
