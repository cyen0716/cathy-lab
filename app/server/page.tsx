"use client";

export default function ServerPage() {
  return (
    <article className="max-w-6xl">
      <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-4">
        What is a Server?
      </h1>

      <div className="space-y-10 text-base leading-[1.85] text-slate-700">
        
        {/* Intro Section */}
        <section className="space-y-5">
          <p> You open a website at midnight, it loads instantly. 
            You check your email on your phone, and your messages are right there. 
            While these everyday actions feel seamless, they rely on massive, invisible systems 
            built to stay online 24/7.
          </p>
          <p> How does a website remain available around the clock? 
            How do thousands of users access the same service simultaneously?</p>
          <p>The answer comes down to a piece of core infrastructure: the server.</p>        
          <p>  
              Although a server shares similar components (CPU, RAM, motherboard) with a PC, 
               its design prioritizes stability and durability.
               To ensure 24/7 uninterrupted service, it features:
          </p>
          <ul className="list-disc pl-6 ">
            <li>High Redundancy: Built with backup systems, such as dual power supplies, to prevent a system crash 
              if a single component fails.</li>
            <li>Massive Performance: Packed with multiple processors and vast amounts of RAM to handle thousands of simultaneous 
              connection requests.</li>
            <li>Specialized OS: Runs operating systems specifically designed for multi-user connectivity 
              and high security, such as Linux or Windows Server.</li>
          </ul>
        </section>
        
        
        {/* Types of Servers */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Common Types of Servers</h2>
          <p>  
              The hardware alone does not determine what kind of server it is. 
              A server can perform different jobs depending on the software installed on it.
          </p>
          <p>  
            Based on the services it provides, a server can take on different roles.
          </p>
          <ul className="list-disc pl-6 ">
            <li>Web Server – Stores website files and delivers web pages to your browser 
              or mobile phone when you type in a URL.</li>
            <li>Mail Server – Responsible for sending, receiving, filtering, and storing emails.</li>
            <li>Database Server – Stores and manages data such as user accounts, passwords, and order information.</li>
            <li>Game Server – Built for multiplayer online games to track player status 
              and synchronize real-time actions for a smooth experience.</li>
          </ul>
        </section>

        {/* How It Works */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 mb-3">How Server Works?</h2>
          <p>  
          1. Receiving Requests: When you click a website, send a message, or play a game on your 
          phone or computer, your device sends a "Request" to the server via the internet.
          </p>
          <p>  
          2. Processing Data: Once received, the server's CPU or AI chips perform the calculations,
           and it reads or writes data to its storage drives.
          </p>
          <p>  
          3. Sending Responses: After processing, the server packages the results (such as web pages, 
          video streams, or game data) and transmits them back to the client device.
          </p>
          <p>  
          4. Displaying Results: The client's device (like a web browser or an app) 
          decodes the received data and displays it to you.
          </p>
        </section>

        {/* Graphic */}
  <div className="bg-white border border-slate-200 rounded-3xl p-4 md:p-8 my-8 shadow-sm">
  <div className="flex items-center justify-center gap-2 md:gap-4">
    
    {/* Client */}
    <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-6 py-3 md:p-4 w-4/12 md:w-3/12 text-center shrink-0">
      <p className="text-base md:text-base text-slate-800 font-bold">Client</p>
    </div>

    {/* 箭頭區塊 */}
    <div className="flex flex-col justify-center items-center w-4/12 md:w-4/12 gap-1">
      <div className="flex flex-col items-center">
        <span className="text-xs md:text-xs font-semibold text-slate-500 mb-0.5 uppercase tracking-wider">Request</span>
        <svg className="w-full md:w-[400px]" height="16" viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 8H198M198 8L188 2M198 8L188 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="flex flex-col items-center mt-1">
        <svg className="w-full md:w-[400px]" height="16" viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 8H2M2 8L12 2M2 8L12 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xs md:text-xs font-semibold text-slate-500 mt-0.5 uppercase tracking-wider">Response</span>
      </div>
    </div>

    {/* Server */}
    <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl px-6 py-3 md:p-4 w-4/12 md:w-3/12 text-center shrink-0">
      <p className="text-base md:text-base text-slate-800 font-bold">Server</p>
    </div>
  </div>
</div>

      </div>
    </article>
  )
}