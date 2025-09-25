import { lusitana } from '@/app/ui/fonts';

type Invoice = {
  id: string;
  customer: string;
  email: string;
  amount: string;
  status: 'paid' | 'pending';
};

const dummyInvoices: Invoice[] = [
  { id: '1', customer: 'Alice Johnson', email: 'alice@example.com', amount: '$450.00', status: 'paid' },
  { id: '2', customer: 'Bob Smith', email: 'bob@example.com', amount: '$320.00', status: 'pending' },
  { id: '3', customer: 'Charlie Brown', email: 'charlie@example.com', amount: '$120.00', status: 'paid' },
  { id: '4', customer: 'Diana Prince', email: 'diana@example.com', amount: '$980.00', status: 'pending' },
];

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Invoices
      </h1>
      <div className="rounded-lg bg-gray-50 p-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left text-sm font-semibold text-gray-600">
              <th className="pb-3">Customer</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyInvoices.map((invoice, i) => (
              <tr
                key={invoice.id}
                className={`text-sm md:text-base ${
                  i !== dummyInvoices.length - 1 ? 'border-b' : ''
                }`}
              >
                <td className="py-3">{invoice.customer}</td>
                <td className="py-3 text-gray-500">{invoice.email}</td>
                <td className="py-3 font-medium">{invoice.amount}</td>
                <td
                  className={`py-3 font-semibold ${
                    invoice.status === 'paid'
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }`}
                >
                  {invoice.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
