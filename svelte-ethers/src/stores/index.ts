import { writable } from "svelte/store";

export const { ethereum: provider } = window;
export const client = "MetaMask";

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log("Please connect to MetaMask");
        address.set(undefined);
    } else if (accounts[0] !== address) {
        address.set(accounts[0]);
        handleNetworkChanged(Number(provider.chainId));
    }
}

function handleNetworkChanged(_network) {
    network.set(_network);
}

export async function login() {
    const accounts = await provider
        .request({ method: 'eth_requestAccounts' })
        .then(handleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log("Please connect to MetaMask.");
            } else {
                console.error(err);
            }
        });

    // let library = Web3Provider(provider);

    provider.on('accountsChanged', handleAccountsChanged);
    provider.on('networkChanged', handleNetworkChanged);

    active.set(true);
};

export async function logout() {
    active.set(false);
};

export const active = writable(false);
export const address = writable(undefined);
export const network = writable(undefined);