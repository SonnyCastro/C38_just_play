// import React, { useState, useEffect } from 'react';
// import Eventcard from '../components/EventCard';
// import axios from 'axios';
// import { Container } from 'react-bootstrap';
// const Event = () => {
//   const [events, setEvents] = useState([]);
//   const getEvents = () => {
//     axios
//       .get('/api/events', { withCredentials: true })
//       .then((res) => setEvents(res.data))
//       .catch((error) => console.log(error));
//   };
//   useEffect(() => {
//     getEvents();
//   }, []);
//   return (
//     <Container>
//     <Form.Group>
//       <Form.Control
//         size="lg"
//         className="mt-4"
//         type="text"
//         placeholder="Search for an Event"
//       />
//     </Form.Group>
//     <Container/>

//     <Container className="mt-4">
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-300 l-300"
//             src={Calisthenics}
//             alt="Caslisthenics and Cardio"
//             height="600"
//           />

//           <Carousel.Caption>
//             <h3>Caslisthenics and Cardio</h3>
//             <p>
//               Nulla vitae elit libero, a pharetra augue mollis interdum.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-300 l-300"
//             src={BeachSoccer}
//             alt="Soccer on the Beach"
//             height="600"
//           />

//           <Carousel.Caption>
//             <h3>Soccer on the Beach</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={SkateWithGreats}
//             alt="Skate with a Great"
//             height="600"
//           />

//           <Carousel.Caption>
//             <h3>Skate with a Great!</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl
//               consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//       <Container/>
//       <Container/>
//     <div className="container d-flex justidy-content-center align-items-center .card-deck flex-wrap">
//       {events.map((event) => {
//         return <Eventcard key={event._id} event={event}>
//       )
//     </div>
//        );
// };
// export default Event;
