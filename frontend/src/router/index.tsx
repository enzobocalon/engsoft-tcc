import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from '../pages/Index';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route>
            <Route path="/" element={<IndexPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
