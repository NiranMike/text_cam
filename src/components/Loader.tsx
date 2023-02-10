import React from 'react'

const Loader = () => {
  return (
    <div className="border bg-[#202020] border-blue-300 shadow rounded-md px-4 p-7 max-w-sm w-full mx-auto">
    <div className="animate-pulse bg-[#202020] flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1 bg-[#202020]">
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="space-y-3 bg-[#202020]">
            <div className="grid grid-cols-3 gap-4 bg-[#202020]">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
        </div>
        </div>
    </div>
</div>
  )
}

export default Loader