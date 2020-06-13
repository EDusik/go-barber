### Linux Container
docker pull mcr.microsoft.com/windows/nanoserver:1803-amd64
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11
docker ps

ff9e45419d4dfdbc37158efbf61704f9bd9d7e0e43806659f5df754b8af51eea

Post Bird
Aula 05 - Sequelize & MVC

Controller
index()
show()
store()
update()
delete()
