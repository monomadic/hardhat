import { writable } from 'svelte/store';

function createWallet() {
    const { active } = writable(false);

    function login() {
        active = true;
    };

    function logout() {
        active = false;
    };

    return {
        active,
        login,
        logout
    };
};

export const wallet = createWallet();