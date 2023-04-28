import {useQuery} from '@tanstack/react-query';
import supabase from '../lib/supabase';

const fetchBankAccounts = async () => {
    const {data, error} = await supabase
        .from('bank_accounts')
        .select('*')
        .order('id', {ascending: true});

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export default function getBankAccounts() {
    return useQuery({queryKey: ['bankAccounts'], queryFn: fetchBankAccounts});
}
