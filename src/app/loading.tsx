export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="size-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />

        <p className="text-sm font-medium text-primary">Loading...</p>
      </div>
    </div>
  );
}
