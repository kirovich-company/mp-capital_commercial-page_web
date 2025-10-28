import { User, Mail } from "lucide-react";

interface UserProfileProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="border border-white/10 bg-black/40 p-8">
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 border border-white/30 flex items-center justify-center flex-shrink-0">
          <User className="h-10 w-10 text-white/70" />
        </div>
        <div className="flex-1">
          <h2 className="text-white text-2xl tracking-wider mb-2">
            {user.firstName} {user.lastName}
          </h2>
          <div className="flex items-center gap-2 text-white/50">
            <Mail className="h-4 w-4" />
            <span className="tracking-wide text-sm">{user.email}</span>
          </div>
          <div className="mt-4 inline-block px-4 py-2 border border-emerald-900/40 bg-emerald-950/20">
            <span className="text-emerald-400 tracking-[0.2em] uppercase text-xs">
              Cuenta Verificada
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
