export const getSocketBaseUrl = (): string => {
  return process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASEURL_SOCKET_URL_PROD!
    : process.env.NEXT_PUBLIC_BASEURL_SOCKET_URL_DEV!;
};
