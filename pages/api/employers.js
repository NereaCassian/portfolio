import data from './employers.json';

export const getEmployers = () => {
  return data;
};

export default (req, res) => {
  const employers = getEmployers();
  res.json(employers);
};
