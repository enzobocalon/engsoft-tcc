import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function useHeaderController() {
  const navigation = useNavigate();
  const { signedIn, user } = useAuth();

  function navigateToLogin() {
    navigation('/login');
  }

  return {
    navigateToLogin,
    signedIn,
    user,
  };
}
