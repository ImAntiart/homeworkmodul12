import { Callback } from '../generics/GCallback';
import { DataForNews, DataForSource } from '../interfaces/TResponsePortal';

interface OptionsSource {
    sources?: string;
}
interface IObjSource {
    endpoint: string;
    options?: OptionsSource;
}

class Loader {
    baseLink: string;
    options: { apiKey: string };
    constructor(baseLink: string, options: { apiKey: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    // { endpoint, options = {} }

    getResp(
        { endpoint, options = {} }: IObjSource,
        callback: Callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: OptionsSource, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            if (key) url += `${key}=${urlOptions[key as keyof OptionsSource]}&`;
        });

        return url.slice(0, -1);
    }
    // :() =>void
    load(
        method: string,
        endpoint: string,
        callback: (data: DataForNews | DataForSource) => void,
        options: OptionsSource = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: DataForNews | DataForSource) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
