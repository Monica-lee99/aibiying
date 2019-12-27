SET NAMES UTF8;
DROP DATABASE IF EXISTS emp;
CREATE DATABASE emp CHARSET=UTF8;
USE emp;
CREATE TABLE house_emp(
  id INT PRIMARY KEY AUTO_INCREMENT,
  ref VARCHAR(100),
  price VARCHAR(5)
);
INSERT INTO house_emp VALUES(NULL,"(五星,长康)清迈慧慧兰娜河畔温泉度假酒店 RatiLanna","230");
INSERT INTO house_emp VALUES(NULL,"(四星,奥南海滩)甲米萨拉塔拉伊度假酒店 Holiday Inn Resort","176");
INSERT INTO house_emp VALUES(NULL,"【克莱因】近福田中心区|双地铁口|美食街道|藤编吊椅|巨幕影院|loft","192");
INSERT INTO house_emp VALUES(NULL,"【HO ME】一居室·温馨森调·阳光明媚·临地铁·福田中心价格","156");