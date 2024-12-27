'use client';

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Bell } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function Navigation() {
  const { user } = useAuth();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Thinker Insights</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/explore" className="transition-colors hover:text-foreground/80">
              Explore
            </Link>
            <Link to="/collections" className="transition-colors hover:text-foreground/80">
              Collections
            </Link>
            <Link to="/topics" className="transition-colors hover:text-foreground/80">
              Topics
            </Link>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search insights..."
                className="pl-8 md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            {user ? (
              <>
                <Button size="icon" variant="ghost">
                  <Bell className="h-4 w-4" />
                </Button>
                <Link to="/profile">
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <img
                      src={user.avatar_url || "https://github.com/shadcn.png"}
                      alt={user.name || "User"}
                      className="rounded-full"
                    />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
} 