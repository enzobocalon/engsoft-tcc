import { useNavigate } from 'react-router-dom';

export function useHeaderController() {
  const navigation = useNavigate();

  function navigateToLogin() {
    navigation('/login');
  }

  return {
    navigateToLogin,
  };
}
