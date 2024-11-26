function TransactionDashboard() {
  return (
    <main className="flex flex-col gap-3 w-[95vw] mx-auto mt-12">
      <h2 className="text-3xl font-bold text-[#F59320]">Hello Peter</h2>
      <h3 className="text-xl font-semibold text-[#1C79BE]">Transaction Dashboard</h3>
      <section className=" grid grid-cols-2 gap-x-2 gap-y-4 bg-[#289ED680] text-[#1C79BE] py-4 px-2 rounded-lg">
        <div className="flex flex-col gap-3 justify-center items-center bg-white px-2 py-6 rounded-2xl ">
          <h4 className="">Daily </h4>
          <span className="text-3xl text-[#1C79BE]">19</span>
          <h3 className="">transactions(s)</h3>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center bg-white px-2 py-6 rounded-2xl ">
          <h4 className="">Monthly </h4>
          <span className="text-3xl text-[#1C79BE]">19</span>
          <h3 className="">transactions(s)</h3>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center bg-white px-2 py-6 rounded-2xl">
          <h4>Daily Sales</h4>
          <span>RM 350.00</span>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center bg-white px-2 py-6 rounded-2xl">
          <h4>Monthly Sales</h4>
          <span>RM 350.00</span>
        </div>
      </section>
    </main>
  );
}

export default TransactionDashboard;
