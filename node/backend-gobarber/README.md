<div id="commands">

## :computer: Commands

### Docker
#### * Linux Container *
```docker
docker pull mcr.microsoft.com/windows/nanoserver:1803-amd64
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
```

```docker
docker ps
docker ps -a
docker stop database
docker start database
```

### Sequelize
```yarn
yarn sequelize migration:create --name=create-files
yarn sequelize db:migrate
yarn sequelize db:migrate: undo
```

### Run Back-end
```yarn
yarn dev
```
</div>

<div id="anotations">

### :memo: Annotations

Post Bird
The controller accepts these methods:

index()
show()
store()
update()
delete()

##### Docker Token
d46172f73575f3543f4e79088bcc8a965a43404bc0ba83c2243e1f2395272846

##### User Token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk3Nzg4NDA1LCJleHAiOjE1OTgzOTMyMDV9.ckj_LhQHGhibq7XWjv1NY6qr1t6gSZN6gIbUEON-uY0

### Lesson
07 - Listando agendamentos do usuário

</div>

