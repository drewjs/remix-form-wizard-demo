import { Outlet } from 'remix'

export default function SignUp() {
  return (
    <div className="min-h-full">
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
