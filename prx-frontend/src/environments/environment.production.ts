import { Environment } from '@env/environment.model';

export const environment: Environment = {
  production: true,
  api: {
    baseUrl: 'https://pr-26-prx-production.up.railway.app/prx',
    timeout: 10000,
  },
  storage: {
    publicBaseUrl: 'https://prx-bucket-public.t3.tigrisfiles.io',
  },
};
