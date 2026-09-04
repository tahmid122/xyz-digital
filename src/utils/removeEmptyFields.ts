// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeEmptyFields = <T extends Record<string, any>>(
  data: T,
): Partial<T> => {
  return Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(data).filter(([_, value]) => {
      if (value === "" || value === null || value === undefined) {
        return false;
      }

      if (Array.isArray(value) && value.length === 0) {
        return false;
      }

      if (
        typeof value === "object" &&
        !Array.isArray(value) &&
        Object.keys(value).length === 0
      ) {
        return false;
      }

      return true;
    }),
  ) as Partial<T>;
};
