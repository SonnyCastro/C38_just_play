import React, { useContext, useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const EventImage = ({ setImageData }) => {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);

  const handleChange = (event) => {
    console.log('Event Target: ', event.target.files);
    setPreview(URL.createObjectURL(event.target.files[0]));
    //setImage(event.target.files[0]);
    const eventImg = new FormData();
    eventImg.append('eventImg', event.target.files[0]);
    setImageData(eventImg);

    console.log('handle change', setImageData);
  };

  const handleImage = (event) => {
    event.preventDefault();
    setLoading(true);
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);
    console.log('img');
    axios
      .post('/api/events/img', avatar, { withCredentials: true })
      .then((response) => {
        console.log(response.data.secure_url);
        setCurrentUser({ ...currentUser, avatar: response.data.secure_url });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form.Group className="mt-5 mb-5" onSubmit={handleImage}>
        <Form.Label htmlFor="description">Event Thumbnail</Form.Label>
        <Image
          src={
            preview
              ? preview
              : currentUser?.avatar
              ? currentUser.avatar
              : 'https://files.willkennedy.dev/wyncode/wyncode.png'
          }
          alt="profilePic"
          className="d-flex"
          width={250}
          height={250}
          roundedCircle
        />
        <Form.Control
          type="file"
          accept="image/*"
          className="d-flex pt-4"
          onChange={handleChange}
        />
        <Button type="submit" size="sm" className="mt-4">
          Save Image
        </Button>
      </Form.Group>
    </>
  );
};

export default EventImage;
