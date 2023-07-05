import styles from '@/app/page.module.css';
export const metadata = {
  title: 'Dans 3D',
  description: 'Dans 3D stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.bod}>{children}</body>
    </html>
  )
}
