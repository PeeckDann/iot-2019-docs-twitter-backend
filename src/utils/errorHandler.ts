export class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

export const handleEndpointError = (e, res) => {
  console.log(e);
  const errorMessage = e.name === 'CustomError' ? e.message : 'Server error';
  res.status(400).send({ success: false, error: errorMessage });
  return;
};
