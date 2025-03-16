function Loading({
  width = "20",
  height = "20",
}: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export { Loading };
