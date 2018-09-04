{"filter":false,"title":"noticia.sql","tooltip":"/SQLS/noticia.sql","undoManager":{"mark":36,"position":36,"stack":[[{"start":{"row":0,"column":0},"end":{"row":9,"column":118},"action":"insert","lines":["CREATE TABLE Noticia (","  ID_Noticia numeric(5) NOT NULL,","  nombreUsuario varchar(20) NOT NULL,","  titulo varchar(50),","  descripcion varchar(MAX),","  fecha_publicacion datetime",")","ALTER TABLE Noticia ADD CONSTRAINT valorUnicoNoticia UNIQUE (ID_Noticia);","ALTER TABLE Noticia ADD CONSTRAINT llavePrimariaNoticia PRIMARY KEY (ID_Noticia,nombreUsuario);","ALTER TABLE Noticia ADD CONSTRAINT llaveForaneaNoticia FOREIGN KEY (nombreUsuario) REFERENCES Usuarios(nombreUsuario);"],"id":1}],[{"start":{"row":9,"column":118},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":11,"column":0},"end":{"row":18,"column":3},"action":"insert","lines":["BULK INSERT aequipo3.aequipo3.[Gastos]","  FROM 'e:\\wwwroot\\aequipo3\\gastos.csv'","  WITH","  (","    CODEPAGE = 'ACP',","    FIELDTERMINATOR = ',',","    ROWTERMINATOR = '\\n'","  )"],"id":4}],[{"start":{"row":11,"column":31},"end":{"row":11,"column":37},"action":"remove","lines":["Gastos"],"id":5},{"start":{"row":11,"column":31},"end":{"row":11,"column":32},"action":"insert","lines":["N"]}],[{"start":{"row":11,"column":32},"end":{"row":11,"column":33},"action":"insert","lines":["o"],"id":6}],[{"start":{"row":11,"column":33},"end":{"row":11,"column":34},"action":"insert","lines":["t"],"id":7}],[{"start":{"row":11,"column":34},"end":{"row":11,"column":35},"action":"insert","lines":["i"],"id":8}],[{"start":{"row":11,"column":35},"end":{"row":11,"column":36},"action":"insert","lines":["c"],"id":9}],[{"start":{"row":11,"column":36},"end":{"row":11,"column":37},"action":"insert","lines":["i"],"id":10}],[{"start":{"row":11,"column":37},"end":{"row":11,"column":38},"action":"insert","lines":["a"],"id":11}],[{"start":{"row":12,"column":28},"end":{"row":12,"column":34},"action":"remove","lines":["gastos"],"id":12},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":["n"]}],[{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"insert","lines":["o"],"id":13}],[{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":["t"],"id":14}],[{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":["i"],"id":15}],[{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["c"],"id":16}],[{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"insert","lines":["i"],"id":17}],[{"start":{"row":12,"column":34},"end":{"row":12,"column":35},"action":"insert","lines":["a"],"id":18}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["S"],"id":19}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["E"],"id":20}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["T"],"id":21}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":22}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["D"],"id":23}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["A"],"id":24}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["T"],"id":25}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["E"],"id":26}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["F"],"id":27}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["O"],"id":28}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["R"],"id":29}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["M"],"id":30}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["A"],"id":31}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["T"],"id":32}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":[" "],"id":33}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["d"],"id":34}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["m"],"id":35}],[{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["y"],"id":36}],[{"start":{"row":0,"column":18},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":37}]]},"ace":{"folds":[],"scrolltop":1.5,"scrollleft":0,"selection":{"start":{"row":5,"column":27},"end":{"row":5,"column":27},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1488961111145,"hash":"ff6532dd5cd4f80d931d3cf9da68585d780a6628"}