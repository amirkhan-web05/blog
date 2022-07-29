const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const middlewares = jsonServer.defaults({
   static: './build',
});
const PORT = process.env.PORT || 3001;
server.use(middlewares);
server.use(
   jsonServer.rewriter({
      '/api/*': '/$1',
   })
);

const rules = auth.rewriter({
   // Permission rules
   users: 600,
   messages: 640,
   // Other rules
});

server.use(rules);
server.use(router);
server.use(auth);
server.listen(PORT, () => {
   console.log('Server is running');
});
