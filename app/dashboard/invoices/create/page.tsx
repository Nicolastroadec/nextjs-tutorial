import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function page() {
    const customers = await fetchCustomers();
    return (
        <main>
            <Breadcrumbs breadcrumbs={[{
                label: 'invoices', href: '/dashboard/invoices',
            },
            {
                label: 'Create invoice',
                href: '/dashboard/invoices/create'
            }]} />
            <Form customers={customers} />
        </main>
    )
}