import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '../pages/Index';
import Login from '../pages/Login';
import AuthGuard from './AuthGuard';
import NewDocument from '../pages/NewDocument';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<AuthGuard isPrivate={false} />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<AuthGuard isPrivate={true} />}>
            <Route path="/new" element={<NewDocument />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
