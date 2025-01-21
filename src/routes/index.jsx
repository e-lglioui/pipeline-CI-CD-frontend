import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/common/Loader';

const Dashboard = lazy(() => import('../pages/backOffice'));
const Reviews = lazy(() => import('../pages/backOffice/reviews'));

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;