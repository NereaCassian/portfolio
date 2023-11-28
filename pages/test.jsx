// pages/spam.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Test = () => {
  const router = useRouter();

  useEffect(() => {
    // Puedes realizar alguna lógica aquí si es necesario antes de redirigir

    // Simula un tiempo de espera antes de redirigir
    const redirectTimeout = setTimeout(() => {
      router.push('/');
    }, 2000);

    // Limpia el timeout en caso de que el componente se desmonte antes de la redirección
    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div>
      <h1>Spam Page</h1>
      <p>Redirecting in 2 seconds...</p>
    </div>
  );
};

export default Test;
