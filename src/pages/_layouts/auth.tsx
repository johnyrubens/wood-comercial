import { Outlet } from 'react-router-dom'

export function AppAuth() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <h1>Autenticação</h1>
        <footer className="text-sm">
          I-Wood &copy; Aplicação I-Wood Adminstrativo - {() => new Date().getFullYear}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-between align-baseline">
        <Outlet />
      </div>
    </div>
  )
}
