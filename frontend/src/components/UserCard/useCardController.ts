import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function useCardController() {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  function navigateToNewFile() {
    navigate('/new');
  }

  return {
    user,
    navigateToNewFile,
    signout,
  };
}
