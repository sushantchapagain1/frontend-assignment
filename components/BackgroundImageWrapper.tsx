type Props = {
  source: string;
  children: React.ReactNode;
};

function BackgroundImageWrapper({ source, children }: Props) {
  return (
    <div
      className="min-h-dvh"
      style={{
        backgroundImage: `url(${source})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  );
}

export default BackgroundImageWrapper;
