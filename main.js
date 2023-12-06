import { Server } from "./dist";

export async function bootstrap () {
    try {
        const srv = new Server({});
        srv.listen(6000, () => console.log("Server is enabled: 5000"));
    }
    catch (err) {
        throw new Error(err);
    }
}

bootstrap().catch(err => console.log(err));

