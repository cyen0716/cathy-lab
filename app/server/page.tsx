"use client"

import Link from "next/link"

export default function ServerPage() {
  return (
    <article className="max-w-6xl">
      <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-4">
        What is a Server?
      </h1>
<h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">
        So Why Do We Even Have Servers?
      </h2>
      <div className="space-y-10 text-base leading-[1.85] text-slate-700">
        
        {/* Intro Section */}
        <section className="space-y-5">
          <p>You open a website at midnight. It loads. </p>
          <p> You check your email on your phone. Everything's there.</p>
          <p>Why is that website still awake?
            How can thousands of people use it at once?</p>
          <p>The answer: a server.</p>

          
          <div className="border-l-[3px] border-[#4338CA] pl-4">
            <p className="text-base text-indigo-800 font-medium">
              A server isn't a completely different machine. It's a computer designed for a different purpose.</p>
          </div>
          <p >  
              While a personal computer is built for an individual's tasks, a server is designed to store, 
              manage, and deliver data to other devices and users.
          </p>

         

        </section>

      </div>
    </article>
  )
}