class MOError extends Error {
  status = 400;

  constructor (message: string) {
    super(message);

    Object.setPrototypeOf(this, MOError.prototype);
  }

  getErrorMessage () {
    return this.message;
  }
}

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new MOError('An error occurred while fetching the data.');
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default fetcher;
