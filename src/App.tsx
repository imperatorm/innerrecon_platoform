import { Outlet } from 'react-router-dom';
import Navigation from '@/components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Outlet />
    </div>
  );
}
