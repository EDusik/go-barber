### Linux Container
docker pull mcr.microsoft.com/windows/nanoserver:1803-amd64
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
docker ps

d46172f73575f3543f4e79088bcc8a965a43404bc0ba83c2243e1f2395272846

# Sequelize
yarn sequelize db:migrate
yarn sequelize db:migrate: undo

Post Bird
09 - Model de usuário

Controller
index()
show()
store()
update()
delete()

