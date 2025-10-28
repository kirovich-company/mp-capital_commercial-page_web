import { LoginForm } from "../components/LoginForm";

interface LoginProps {
  onNavigate?: (page: "home" | "about" | "login") => void;
  onLogin?: () => void;
}

export default function Login({ onNavigate, onLogin }: LoginProps) {
  return <LoginForm onNavigate={onNavigate} onLogin={onLogin} />;
}
