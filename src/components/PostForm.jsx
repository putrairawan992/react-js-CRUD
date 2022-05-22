import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {
  addPostAction,
  resetSelected,
  editPostAction,
} from 'store/posts/action';
import { useSelector, useDispatch } from 'react-redux';

const PostForm = ({ onCancel, setData }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.PostReducer);
  const [title, setTitle] = useState(selected?.title || '');
  const [body, setBody] = useState(selected?.body || '');

  const postData = async () => {
    await addPostAction({ title, body });
  };

  const updateData = async () => {
    await editPostAction({ id: selected.id, title, body });
  };

  return (
    <Form className="w-25">
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Body</Form.Label>
        <Form.Control value={body} onChange={(e) => setBody(e.target.value)} />
      </Form.Group>

      <Button
        variant="primary"
        className="me-3"
        disabled={!title || !body}
        onClick={selected ? updateData : postData}
      >
        {selected ? 'Update' : 'Submit'}
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          onCancel();
          setTitle('');
          setBody('');
          dispatch(resetSelected());
        }}
      >
        Cancel
      </Button>
    </Form>
  );
};

export default PostForm;
