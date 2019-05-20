FROM node:9.11.2

# Set the work directory
WORKDIR /var/www/sun-portal

# Good to have stuff
RUN npm install pm2@latest -g && npm install babel-cli -g && npm install -g knex && npm install -g knex-migrator --unsafe-perm

RUN npm install

COPY . .

# Entrypoint script
RUN chmod +x docker-entrypoint.sh

# Expose the port

ENTRYPOINT ["sh", "./docker-entrypoint.sh"]
