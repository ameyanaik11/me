import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta content="follow, index" name="robots" />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      <link href="/globe.svg" rel="icon" sizes="any" />
    </NextHead>
  );
}
