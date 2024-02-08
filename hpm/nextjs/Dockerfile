FROM dl-innersource-docker.artifactory-ehv.ta.philips.com/node:20

# RUN sed -i -e 's/DEFAULT@SECLEVEL=2/DEFAULT@SECLEVEL=1/' /etc/ssl/openssl.cnf

WORKDIR /app
COPY  package.json  yarn.lock  ./
COPY .yarn/releases/yarn-4.0.2.cjs  ./.yarn/releases/yarn-4.0.2.cjs
COPY .yarnrc.yml  ./

# Add Philips certificate
COPY philips.crt /usr/local/share/ca-certificates/corp/philips.crt
RUN chmod 644 /usr/local/share/ca-certificates/corp/philips.crt && update-ca-certificates

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn","dev" ]


