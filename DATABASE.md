## 1. Sequelize Database

### Sequelize init
```sh
    npx sequelize-cli init
```

### Create database
``` sh
    npx sequelize-cli db:create
```

### Drop database
``` sh
    npx sequelize-cli db:drop
```

## 2. Sequelize migration

### Create table and model
``` sh
    npx sequelize-cli model:generate --name <table_name> --attributes <name>:<type>
```

### Migration database
``` sh
    npx sequelize-cli db:migrate
```

### Undo migration
```sh
    npx sequelize-cli db:migrate:undo
```

### Undo all migration
``` sh
    npx sequelize-cli db:seed:undo:all
```

## 3. Sequelize Seeder

### Create seed file
``` sh
    npx sequelize-cli seed:generate --name <name>
```

### Seeder data
``` sh
    npx sequelize-cli db:seed:all
```

### Seeder specified file
``` sh
    npx sequelize-cli db:seed <name file>
```

### Undo Seed
``` sh
    npx sequelize-cli db:seed:undo
```

## Reset database
``` sh
    npx sequelize-cli db:drop
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

```

