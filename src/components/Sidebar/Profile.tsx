import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/jefersonConceicao.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Jeferson Conceição
        </span>
        <span
          className="truncate text-sm font-semibold text-zinc-500"
          title="asdasdasdasdasdasdasdasdasdsadadasdasd@outlook.com"
        >
          asdasdasdasdasdasdasdasdasdsadadasdasd@outlook.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
