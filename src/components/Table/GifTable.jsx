import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import getGifs from '../../core/helpers/getGifs';
import HeaderProduct from './HeaderProduct';
import './tablestyle.css';

function GifTable() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs();
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <HeaderProduct ruta="/modulo-control-de-inventario/lista" />
      <Table bordered hover>
        <thead className="th">
          <tr>
            <th colSpan={6}>Gifs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {images.map(({ id, title, url }) => (
              <td key={id}>
                <img src={url} alt={title} className="gifTable" />
                {title}
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default GifTable;
