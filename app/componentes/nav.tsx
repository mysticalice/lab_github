"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-md transition ${
      pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="flex gap-4 p-4 bg-gray-100 shadow">
      <Link href="/" className={linkClass("/")}>
        Home
      </Link>

      <Link href="/configuracao" className={linkClass("/configuracoes")}>
        Configurações
      </Link>

      <Link href="/repositorios" className={linkClass("/repositorios")}>
        Repositórios
      </Link>
    </nav>
  );
}