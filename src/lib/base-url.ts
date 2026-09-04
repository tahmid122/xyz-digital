export const getBaseUrl = (): string => {
  return process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASEURL_PROD!
    : process.env.NEXT_PUBLIC_BASEURL_DEV!;
};
