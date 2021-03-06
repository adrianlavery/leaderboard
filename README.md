# Leaderboard

This code uses Azure functions and Azure Cosmos DB to create a leaderboard for a project to gamify the pre-req's for a hackathon. The code was initially based on this [blog post](https://stiller.blog/2020/07/build-a-custom-url-shortener-using-azure-functions-and-cosmos-db/) by [Eran Stiller](https://github.com/estiller).

## Getting started

### Initial Configuration

Create an Azure CosmosDB account and add the connection string to your `local.settings.json`

```
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "openhack_DOCUMENTDB": "<ConnectionString>"
  }
}

```

### Create Player

```
curl --location --request POST 'https://localhost/api/createPlayer' \
--header 'Content-Type: text/plain' \
--data-raw '{
"username": "adrlavery",
"game": "game1"
}'
```
If the CosmosDB collection doesn't exist, it will be created. The document will be created in the following format

```
{
    "id": "adrlavery",
    "game": "game1"
}
```

### Update Player

```
curl --location --request POST 'https://localhost/api/updatePlayer' \
--header 'Content-Type: text/plain' \
--data-raw '{
"username": "adrlavery",
"game": "game1",
"score": "10"
}'
```
The document will be updated in the following format

```
{
    "id": "adrlavery",
    "game": "game1",
    "score": "10"
}
```

## Features

* Azure Functions
* Azure CosmosDB

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.

## Links

- Build a custom URL shortener: https://stiller.blog/2020/07/build-a-custom-url-shortener-using-azure-functions-and-cosmos-db/
- Azure Functions: https://docs.microsoft.com/en-gb/azure/azure-functions/
- Azure CosmosDB: https://docs.microsoft.com/en-us/azure/cosmos-db/introduction


## Licensing

The code in this project is licensed under MIT license.