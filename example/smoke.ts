import { Node, NetworkHub } from "../node/mod.ts";

export async function createServer() {
  const hostHub = new NetworkHub("ws://127.0.0.1:5000");
  const host = new Node({ hub: hostHub });
  const app = host.rest.createServer();
  app.get("/", (_req, res) => {
    res.headers["Content-Type"] = "text/html";
    res.send("<h1>hello world</h1>");
  });
  app.listen(80);

  console.log(await host.address());
}

export async function connectServer(addr: string) {
  const nodeHub = new NetworkHub("ws://127.0.0.1:5000");
  const node = new Node({ hub: nodeHub });
  const resp = await node.rest.fetch(`rest://${addr}/`);
  const content = await resp.text();
  console.log(content);

  await nodeHub.dispose();
  await node.dispose();
}
