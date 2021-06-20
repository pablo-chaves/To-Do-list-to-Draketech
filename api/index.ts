/* eslint-disable no-console */
import server from './src/app';
import db from './src/db';

const PORT = process.env.PORT || 3001;
db.sequelize.sync({ force: false }).then(async () => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});
