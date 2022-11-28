## Sequelize init
```sh
    npx sequelize-cli init
```

## Create database
``` sh
    npx sequelize-cli db:create
```

## Create table and model
``` sh
    npx sequelize-cli model:generate --name <table_name> --attributes <name>:<type>
```

## Migration database
``` sh
    npx sequelize-cli db:migrate
```

## Undo migration
```sh
    npx sequelize-cli db:migrate:undo
```

## Create seed file
``` sh
    npx sequelize-cli seed:generate --name <name>
```

## Seeder data
``` sh
    npx sequelize-cli db:seed:all
```

## Undo Seed
``` sh
    npx sequelize-cli db:seed:undo
```

## Seeder specific file
``` sh
    npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```

