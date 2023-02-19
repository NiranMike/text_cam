import { AppProps } from 'next/app';
import { Session } from 'next-auth';

export type CustomAppProps = AppProps & {
  session?: Session;
};