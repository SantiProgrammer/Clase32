
node server.js 8081 FORK
artillery quick --count 50 -n 40 http://localhost:8081?max=100000 > result_fork.txt


node server.js 8081 CLUSTER
artillery quick --count 50 -n 40 http://localhost:8081?max=100000 > result_cluster.txt


node --prof server.js




--------------
// Profiling / monitoreo del rendimiento 

curl -V
curl GET http://www.google.com



------
http://localhost:8080/auth-bloq?username=guille&password=123
http://localhost:8080/auth-nobloq?username=guille&password=123


node --prof server.js











