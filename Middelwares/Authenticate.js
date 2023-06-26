import jwt from 'jsonwebtoken';

const Authenticate = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  const token = req.headers.authorization.split(' ')[1].slice(1,-1)
  // if (token.startsWith('"') && token.endsWith('"')) {
  //   token = token.slice(1, -1);
  // console.log(token)
  jwt.verify(token, 'ravi', (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    req.user = decoded;
    next();
    // }
  });
};

export default Authenticate