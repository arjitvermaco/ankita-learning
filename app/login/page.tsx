import { login, signup } from './action'

export default function LoginPage() {
  return (
    <form className=" max-w-3xl mx-auto flex flex-col space-y-4">
      <label htmlFor="fullName" className="font-semibold">Full Name:</label>
      <input id="fullName" name="fullName" type="text" required className="border border-gray-300 p-2 rounded" />
      <label htmlFor="email" className="font-semibold">Email:</label>
      <input id="email" name="email" type="email" required className="border border-gray-300 p-2 rounded" />
      <label htmlFor="password" className="font-semibold">Password:</label>
      <input id="password" name="password" type="password" required className="border border-gray-300 p-2 rounded" />
      <button type="submit" formAction={login} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Log in</button>
      <button type="submit" formAction={signup} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Sign up</button>
      </form>
  )
}