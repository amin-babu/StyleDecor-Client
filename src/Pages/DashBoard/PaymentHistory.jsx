import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading";

const PaymentHistory = () => {

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['paymentHistory', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    }
  });

  if (isLoading) {
    return <Loading />;
  }

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
              <tr key={payment._id} className="hover">
                <td>{index + 1}</td>
                <td className="font-medium">{payment.serviceName}</td>
                <td>৳ {payment?.amount}</td>
                <td>{payment.paidAt?.slice(0, 10)}</td>
                <td className="font-mono text-sm">{payment.transactionId}</td>
                <td>
                  <span className="badge badge-success">{payment.paymentStatus}</span>
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
