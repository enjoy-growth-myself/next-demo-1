export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="">ルートレイアウトコンポーネント</div>
      {children}
    </div>
  );
}
