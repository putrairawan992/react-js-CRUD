/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Posts from 'components/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from 'store/posts/action';
import PostForm from 'components/PostForm';

const Home = () => {
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col className="align-items-end d-flex flex-column">
          {!showAddForm && (
            <Button onClick={() => setShowAddForm(true)}>Add Data</Button>
          )}
          {showAddForm && <PostForm onCancel={() => setShowAddForm(false)} />}
        </Col>
      </Row>

      <Row>
        <Posts onEdit={() => setShowAddForm(true)} />
      </Row>
    </Container>
  );
};

export default Home;
