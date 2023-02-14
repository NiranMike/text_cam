import { NextPageContext } from 'next';
import Image from 'next/image';
import svr from "../src/assets/images/serverDown.svg"

function ErrorPage({ statusCode }: { statusCode: number }) {
  return(
    <div>
      <Image
          src={ svr }
          alt=""
          width={150}
          height={150}
        />
      <p>An error occurred: {statusCode}</p>
  </div>);
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode: number | undefined = res ? res.statusCode : err ? err.statusCode : 500;
  return { statusCode };
};

export default ErrorPage;