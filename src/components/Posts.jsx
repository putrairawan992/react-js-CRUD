import { Fragment } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import { deletePostAction, setSelected } from 'store/posts/action';

const Posts = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { posts, loadingPosts } = useSelector((state) => state.PostReducer);

  const deleteData = async (id) => {
    await deletePostAction(id);
  };

  return (
    <Fragment>
      {loadingPosts ? (
        <Loader />
      ) : (
        <Row>
          {posts.map((v, i) => (
            <Col key={i} md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{v.title}</Card.Title>
                  <Card.Text>{v.body}</Card.Text>
                  <Button
                    size="sm"
                    variant="light"
                    className="me-3"
                    onClick={() => {
                      dispatch(setSelected(v.id));
                      onEdit();
                    }}
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteData(v.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  );
};

export default Posts;
