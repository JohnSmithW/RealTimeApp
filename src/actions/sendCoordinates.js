const sendCoordinates = (id, x, y) => ({
  type: 'server/SEND_COORDINATES',
  payload: { id, x, y },
});

export default sendCoordinates;
