import { Link } from 'react-router';
import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { useAuth } from '../../context/AuthContext';
import logo from '../components/ui/logo.png'
export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, role, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={logo} alt="Website-Logo" className="w-10 h-10"></img>
            </div>
            <span className="text-2xl font-semibold tracking-tight text-foreground">
              Thera
              <span className="text-primary">mint</span>
            </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/therapists" className="text-foreground hover:text-primary transition-colors">
              Therapists
            </Link>
            <Link to="/book-appointment" className="text-foreground hover:text-primary transition-colors">
              Book Appointment
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>

            {/* 🔐 ADMIN ONLY */}
            {isLoggedIn && role === 'admin' && (
              <Link
                to="/admin"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Admin
              </Link>
            )}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-foreground">
                    Log In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <Button variant="outline" onClick={logout}>
                Log Out
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <Link to="/therapists" className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}>
              Therapists
            </Link>

            <Link to="/book-appointment" className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}>
              Book Appointment
            </Link>

            <Link to="/contact" className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            {/* 🔐 ADMIN ONLY (MOBILE) */}
            {isLoggedIn && role === 'admin' && (
              <Link
                to="/admin"
                className="block py-2 text-muted-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            )}

            <div className="pt-4 space-y-2 border-t border-border">
              {!isLoggedIn ? (
                <>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Sign Up
                    </Button>
                  </Link>
                </>
              ) : (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Log Out
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
