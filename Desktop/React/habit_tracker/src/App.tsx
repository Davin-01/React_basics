export default function App() {
  return <div>
    <Header></Header>
  </div>
}

function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1"></div>
      <div></div>
    </header>
  )
}