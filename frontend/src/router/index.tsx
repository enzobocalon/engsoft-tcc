import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '../pages/Index';
import Login from '../pages/Login';
import NewDocument from '../pages/NewDocument';
import AuthGuard from './AuthGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<AuthGuard isPrivate={false} />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<AuthGuard isPrivate />}>
            <Route path="/new" element={<NewDocument />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
