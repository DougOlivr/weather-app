import { MainContent } from "./components/MainContent"
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div className="flex h-full ">
      <aside className=" bg-bg-sidebar max-w-[459px] w-full">
        <Sidebar />
      </aside>
      <main className="bg-bg-main w-full ">
        <MainContent />
      </main>
    </div>
  )
}

export default App
