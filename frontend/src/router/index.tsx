import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '../pages/Index';
import Login from '../pages/Login';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
