# ReDocCLI公式のDockerfileを使用
# https://github.com/Redocly/redoc/blob/master/cli/Dockerfile

FROM node:alpine

RUN npm install -g redoc-cli

WORKDIR /data
EXPOSE 8080

ENTRYPOINT ["redoc-cli"]
CMD []
