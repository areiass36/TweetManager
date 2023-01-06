module.exports = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "TweetManager API",
            version: "0.0.1",
            description:
                "This is the first version of Tweet Manager API for my System Integration class",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Augusto Barreto",
                email: "barretoareias@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ["./TweetManagerApi/routes/*.js", "./routes/*.js"],
};