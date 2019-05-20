#!/bin/bash
set -e
npm install -g knex --unsafe-perm
npm install -g knex-migrator --unsafe-perm
npm start
npm run migrate
tail -f /dev/null
exec "$@"
