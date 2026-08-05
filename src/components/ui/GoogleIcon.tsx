type GoogleIconProps = {
  className?: string;
};

export function GoogleIcon({ className }: GoogleIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static brand mark; avoid CSS fill overrides
    <img
      src="/google.svg"
      alt=""
      width={24}
      height={24}
      className={className}
      decoding="async"
    />
  );
}
