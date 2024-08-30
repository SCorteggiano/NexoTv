// src/pages/auth/error.tsx
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const ErrorPage: NextPage = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Error en la Autenticación</h1>
      <p>{error ? `Error: ${error}` : 'Set Error Message Here'}</p>
    </div>
  );
};

export default ErrorPage;
