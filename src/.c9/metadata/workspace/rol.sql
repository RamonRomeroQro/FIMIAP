{"filter":false,"title":"rol.sql","tooltip":"/rol.sql","undoManager":{"mark":9,"position":9,"stack":[[{"start":{"row":0,"column":0},"end":{"row":5,"column":65},"action":"insert","lines":["CREATE TABLE Rol (","  ID_ROL numeric(5) NOT NULL,","  nombreRol varchar(20) NOT NULL",")","","ALTER TABLE Rol ADD CONSTRAINT llavePrimaria PRIMARY KEY(ID_Rol);"],"id":1}],[{"start":{"row":5,"column":65},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":7,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["BULK INSERT aequipo3.aequipo3.[Gastos]","  FROM 'e:\\wwwroot\\aequipo3\\gastos.csv'","  WITH","  (","    CODEPAGE = 'ACP',","    FIELDTERMINATOR = ',',","    ROWTERMINATOR = '\\n'","  )"],"id":4}],[{"start":{"row":7,"column":31},"end":{"row":7,"column":37},"action":"remove","lines":["Gastos"],"id":5},{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"insert","lines":["R"]}],[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":["o"],"id":6}],[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"insert","lines":["l"],"id":7}],[{"start":{"row":8,"column":28},"end":{"row":8,"column":34},"action":"remove","lines":["gastos"],"id":9},{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":["R"]}],[{"start":{"row":8,"column":29},"end":{"row":8,"column":30},"action":"insert","lines":["o"],"id":10}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":["l"],"id":11}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":6},"end":{"row":9,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1488960936406,"hash":"a7355be63fd0afe1388f0738323f3ee7d0d0eeb2"}