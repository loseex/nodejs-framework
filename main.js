import { Server } from "./dist";

export async function Main () {
    try {
        const srv = new Server({});
        srv.listen(5000, () => {})
    }
    catch (err) {
        throw new Error(err);
    }
}

Main().catch(err => console.log(err));

