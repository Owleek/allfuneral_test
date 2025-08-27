import { useState } from 'react';
import { Button } from '../../../shared/ui/button/Button';
import { Input } from '../../../shared/ui/input/Input';
import { Icon } from '../../../shared/ui/icon/Icon';
import './LoginDialog.scss';
      
export function LoginDialog() {
  const [login, setLogin] = useState('USER');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { login, password });
  };

  return (
    <div className="LoginDialog">
      <div className="LoginDialog__content">
        {/* Logo */}
        <div className="LoginDialog__logo">
          <Icon id="logo" />
        </div>

        {/* Form */}
        <form className="LoginForm" onSubmit={handleSubmit}>
            {/* Login */}
            <Input
              label="Login"
              type="text"
              required
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Enter login"
              className="LoginForm__input"
            />

            {/* Password */}
            <Input
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled
              placeholder="Enter password"
              className="LoginForm__input"
            />

            {/* Button */}
            <Button
              type="submit"
              variant="filled"
              className="LoginForm__button"
            >
              Login
            </Button>
        </form>

      </div>
    </div>
  );
}
