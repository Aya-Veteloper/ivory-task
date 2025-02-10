import Search from "@/components/Search/Search.js"
import Table from "@/components/Table/Table"
export default function page() {
  return (
    <main className="relative h-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
          <div className="w-full md:col-span-1">
            <Search />

          </div>
          <div className="w-full md:col-span-3">
            <Table />
          </div>
        </div>

      </div>

    </main>

  )
}
