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

interface AccountApiReponse {
    id: string;
    name: string;
    birth: string;
    created_at: Date;
    updated_at: Date;
}

type AccountInputData = Omit<Account, 'id' | 'createdAt' | 'updatedAt'>

interface AccountContextData {
    account: Account;
    createAccount: (accountInput: AccountInputData) => Promise<Account>
}


const AccountContext = createContext<AccountContextData>({} as AccountContextData);

export function AccountProvider({ children }: AccountProviderProps) {
    const [account, setAccount] = useState<Account>({} as Account);

    async function createAccount(accountInput: AccountInputData): Promise<Account> {
        const response: any = await api.post('/signup', accountInput)
        const { id, name, birth, created_at, updated_at } = response.data as AccountApiReponse;
        const storageAccount = { id, name, birthDate: birth, createdAt: created_at, updatedAt: updated_at };
        setAccount(storageAccount);

        return storageAccount;
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