import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import PATHS from 'routes/PATHS';
import Layout from 'components/templates/Layout';

const JobsSearch = lazy(() => import('components/pages/JobsSearch'));
const JobCardFull = lazy(() => import('components/molecules/JobCardFull'));

function App() {
  const page = useRoutes([
    {
      path: PATHS.ROOT,
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={PATHS.JOBSLIST} /> },
        {
          path: PATHS.JOBSLIST,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<></>}>
                  <JobsSearch />
                </Suspense>
              ),
            },
            {
              path: ':id',
              element: (
                <Suspense fallback={<></>}>
                  <JobCardFull />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ]);
  return page;
}

export default App;
