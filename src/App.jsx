import React from 'react'

export default function App() {
  return (
    <div className='min-h-screen'>
      <div className="text-3xl font-bold underline text-red-400 text-center border bg-ghost py-5 m-6">
        App
      </div>
      <div className='flex gap-3 justify-center'>
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
    </div>
  )
}
