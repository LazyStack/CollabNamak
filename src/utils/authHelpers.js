import jwt_decode from 'jwt-decode';

export function setToken(token) {
  localStorage.setItem('access_token', token);
}

export function getToken() {
  return localStorage.getItem('access_token');
}

export function getUserRole() {
  const token = localStorage.getItem('access_token');
  if (!token) return null;
  try {
    const decoded = jwt_decode(token);
    return decoded?.role || null;
  } catch (err) {
    console.error('Error decoding token:', err);
    return null;
  }
}

export function logout() {
  localStorage.removeItem('access_token');
}
