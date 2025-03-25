import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTES from '../routes';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return children;
}