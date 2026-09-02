const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const tokenHeader = req.headers['authorization'];
  if (!tokenHeader) return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });

  const token = tokenHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Formato de token inválido.' });

  try {
    const verificado = jwt.verify(token, process.env.JWT_SECRET || 'pyme_control_secret_key_2026_super_secure_jwt');
    req.usuario = verificado;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token inválido o expirado.' });
  }
};
