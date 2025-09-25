import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

const dummyCustomers: Customer[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    image_url: '/customers/balazs-orban.png',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '4',
    name: 'Diana Prince',
    email: 'diana@example.com',
    image_url: '/customers/jared-palmer.png',
  },
];

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customers
      </h1>
      <div className="rounded-lg bg-gray-50 p-6">
        {dummyCustomers.map((customer, i) => (
          <div
            key={customer.id}
            className={`flex items-center justify-between py-4 ${
              i !== 0 ? 'border-t' : ''
            }`}
          >
            <div className="flex items-center">
              <Image
                src={customer.image_url}
                alt={`${customer.name}'s profile`}
                className="mr-4 rounded-full"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold">{customer.name}</p>
                <p className="text-sm text-gray-500">{customer.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
