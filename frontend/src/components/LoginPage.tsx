// src/components/LoginPage.tsx
import type { User } from '../types';

type Props = {
  onLogin: (u: User) => void;
  onClose: () => void;
  onSwitchToRegister: () => void;
};

export default function LoginPage({ onLogin, onClose, onSwitchToRegister }: Props) {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporary mock login to test the UI flow
    const mockUser: User = { uid: '123', name: 'PuzzleMaster', coins: 0, isBanned: false, role: 'registered' };
    onLogin(mockUser);
  };

  return (
    // The dark transparent overlay
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow border-0 rounded-3">
          
          <div className="modal-header border-0 pb-0">
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>

          <div className="modal-body p-4 p-md-5 pt-0">
            <h2 className="text-center mb-4 fw-bold">Welcome Back</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" required />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
              </div>
            </form>
            
            <div className="text-center mt-4">
              <p className="mb-0">
                Don't have an account?{' '}
                <button className="btn btn-link text-decoration-none fw-bold text-warning p-0 align-baseline" onClick={onSwitchToRegister}>
                  Register here
                </button>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}