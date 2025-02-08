import { ID, Account, Client } from 'appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';

const appwriteClient = new Client();
const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;

type CreateUserAccount = {
    email: string;
    password: string;
    name: string;
};

type LoginUserAccount = {
    email: string;
    password: string;
};

if (!Config.APPWRITE_ENDPOINT || !Config.APPWRITE_PROJECT_ID) {
    throw new Error('Missing Appwrite configuration. Check your .env file.');
}

class AppwriteService {
    account: Account;

    constructor() {
        appwriteClient
            .setEndpoint(APPWRITE_ENDPOINT)
            .setProject(APPWRITE_PROJECT_ID);
        this.account = new Account(appwriteClient);
    }

    async createAccount({ email, password, name }: CreateUserAccount) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {
                // Authenticate the user immediately after creating the account
                return await this.login({ email, password });
            } else {
                return null;
            }
        } catch (error) {
            Snackbar.show({
                text: `Error creating account: ${error}`,
                duration: Snackbar.LENGTH_LONG,
            });
            console.log("Appwrite service :: createAccount() :: ", error);
        }
    }

    async login({ email, password }: LoginUserAccount) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            Snackbar.show({
                text: `Error logging in: ${error}`,
                duration: Snackbar.LENGTH_LONG,
            });
            console.log("Appwrite service :: login() :: ", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            Snackbar.show({
                text: `Error fetching current user: ${error}`,
                duration: Snackbar.LENGTH_LONG,
            });
            console.log("Appwrite service :: getCurrentUser() :: ", error);
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            Snackbar.show({
                text: `Error logging out: ${error}`,
                duration: Snackbar.LENGTH_LONG,
            });
            console.log("Appwrite service :: logout() :: ", error);
        }
    }
}

export default AppwriteService;
