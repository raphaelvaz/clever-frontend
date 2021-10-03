import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface Account {
    id: string;
    name: string;
    birthDate: string;
    createdAt: Date;
    updatedAt: Date;
}

interface AccountProviderProps {
    children: ReactNode
}

type AccountInputData = Omit<Account, 'id' | 'createdAt' | 'updatedAt'>

interface AccountContextData {
    account: Account;
    createAccount: (accountInput: AccountInputData) => Promise<void>
}


const AccountContext = createContext<AccountContextData>({} as AccountContextData);

export function AccountProvider({ children }: AccountProviderProps) {
    const [account, setAccount] = useState<Account>({} as Account);

    async function createAccount(accountInput: AccountInputData): Promise<void> {
        const response = await api.post('/signup', accountInput)
        const StorageAccount = response.data as Account;

        setAccount(StorageAccount);
    }

    return (
        <AccountContext.Provider value={{ account, createAccount }}>
            {children}
        </AccountContext.Provider>
    )
}

export function useAccount() {
    const context = useContext(AccountContext)

    return context
}