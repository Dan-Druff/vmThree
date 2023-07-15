
import Link from "next/link"
const HomePage = () => {
  return (
    <div>
      <h2>HOME PAGE</h2>
      <ul>
        <li>
          <Link href='/'>HOME</Link>
        </li>
        <li>
          <Link href='/three'>THREE</Link>
        </li>
        <li>
          <Link href='/tutorial'>TUTORIAL</Link>
        </li>
        <li>
          <Link href='/jm'>JM</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage