import React from 'react';
import { Card } from 'react-bootstrap';
import {product} from './product.js';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';

const firstName = 'Loubna'; // replace with your first name or set to undefined

function App() {
  const greeting = firstName ? `Hello, ${firstName}!` : 'Hello, there!';

  return (
    <div className="container mt-3">
      <div className="row">
        {product.map((product, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <Card className="shadow-lg h-100">
              <Card.Img variant="top" src={product.image_url} alt={product.name} />
              <Card.Body>
                <Card.Title><Name /></Card.Title>
                <Card.Text>
                  <Description />
                  <Price />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center mt-3">
        <p className="mb-0 text-uppercase" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6c757d' }}>{greeting}</p>
      </div>
    </div>
  );
}

export default App;