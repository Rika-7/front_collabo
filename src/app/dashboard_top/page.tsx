import { Header } from "@/components/common/Header";

export default function DashboardTop() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="min-h-screen bg-gray-50">
          <Header currentPage="ダッシュボード" />
          <h1 className="text-4xl font-bold">ダッシュボード</h1>
        </div>
      </main>
    </div>
  );
}
