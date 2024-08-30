import {loadStripe} from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
    throw new Error('La clave pública de Stripe no está definida. Asegúrate de que la variable de entorno NEXT_PUBLIC_STRIPE_PUBLIC_KEY esté configurada correctamente.');
  }
  
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  
  export default stripePromise;