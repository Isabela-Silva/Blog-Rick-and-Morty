import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from '../components/BlogPost';
import Pagination from '../components/Pagination';
import { Row, Col, Container } from 'react-bootstrap';
import './Home.css';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => {
        setCharacters(res.data.results.slice(0, 9));
        setTotalPages(Math.ceil(res.data.info.count / 9));
      });
  }, [page]);

  return (
    <Container>
      <h2 className="text-center my-4">Personagens de Rick and Morty</h2>
      
      <Row className="justify-content-center g-4">
        {characters.map(char => (
          <Col key={char.id} xs={12} md={6} lg={4} className="mb-4 d-flex">
            <BlogPost character={char} />
          </Col>
        ))}
      </Row>
      
      <div className="mt-4 mb-5">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </Container>
  );
}