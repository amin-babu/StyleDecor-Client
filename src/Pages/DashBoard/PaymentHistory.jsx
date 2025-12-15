const PaymentHistory = () => {
  const payments = [
    {
      id: 1,
      serviceName: "Wedding Decoration",
      amount: 15000,
      date: "12 Aug 2025",
      transactionId: "txn_9XK12AB",
      status: "Paid",
    },
    {
      id: 2,
      serviceName: "Home Decoration",
      amount: 3500,
      date: "05 Aug 2025",
      transactionId: "txn_7PQ45CD",
      status: "Paid",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Payment History</h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="table">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Amount</th>
              <th>Payment Date</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.id} className="hover">
                <td>{index + 1}</td>
                <td className="font-medium">{payment.serviceName}</td>
                <td>৳ {payment.amount}</td>
                <td>{payment.date}</td>
                <td className="font-mono text-sm">{payment.transactionId}</td>
                <td>
                  <span className="badge badge-success">{payment.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
