import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css'

const App = lazy(() => import('./App'));

createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
        <Suspense fallback={<Loading />}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Suspense>
    </HelmetProvider>
);
