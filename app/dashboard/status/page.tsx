import AllStatus from "@/app/allStatus"
import fetchdata from "@/app/fetchdata"
export const dynamic = 'force-dynamic'

export default async function Home() {
  let data = await fetchdata()
  return (
    <div>
      <h1>status page</h1>
        <AllStatus documents={data} />
    </div>
  )
}