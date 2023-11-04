import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface AuthGuardProps {
  isPrivate: boolean;
}

export default function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth();
  const { pathname } = useLocation();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && pathname === '/login') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
