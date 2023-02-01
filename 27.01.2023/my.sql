-- 1. Вывести все колонки таблицы Suppliers
SELECT * FROM Suppliers;


-- 2. Вывести колоники CustomerID и EmployeeID из таблицы Orders
select CustomerID, EmployeeID from Orders;


-- 3. Вывести названия товаров, у которых цена дороже 30
select ProductName from Products where Price > 30;


-- 4. Вывести все данные с таблицы OrderDetails , где ProductID равно 24
select * from OrderDetails where ProductID = 24;


-- 5. Вывести список товаров, у которых CategoryID равно 7
select ProductID, ProductName from Products where CategoryID = 7;



1. Вывести список продуктов, у которых цена от 20 до 40
select * from products where price >20 and price < 40;


2. Вывести список продуктов , не с категории Produce
SELECT * FROM [Products] where not CategoryID = 7;


3.Вывести список Products , по убыванию цен
SELECT * FROM [Products] order by price desc;


4.Вывести список Suppliers, от А до Z, по SupplierName
SELECT * FROM [suppliers] order by SupplierName asc;


5.Вывести список Employees, от А до Z, по LastName
SELECT * FROM [Employees] order by LastName asc;


-- customers
INSERT INTO customers
VALUES ( 100, 'Aryn', 'Dastan', 'Tole bi 70', 'Almaty', 05000, 'Kazakhstan');

update customers setContactName = 'Amir' where CustomerID = 100;

delete from customers where CustomerID = 100;


--categories
INSERT INTO categories

VALUES ( 100, 'hbjshdb', 'jhbjkshdbhfbbj');

update categories set CategoryName = 'Produce' where CategoryID = 100;

delete from categories where CategoryID = 100;

--employees
INSERT INTO employees
VALUES ( 11, 'Abi', 'Aryn', '2002-06-08', 'EmpID3.pic', 'jhvshjgvdf');

update employees set notes = 'Student' where EmployeeID = 11;

delete from employees where EmployeeID = 11;


delete * from Employees 
where LastName = 'King' and  FirstName = 'Robert';

update customers set PostalCode = 10000 where CustomerName = 'Hungry Coyote Import Store';

3. Вывести данные клиента сделавшего заказ с OrderID 10305 , 
и вывести полное имя клиента, адрес, страну и город , и вывести данные SupplierName и номер телефона
select customers.CustomerName, Address ,City, Country
4. Вывести имена Suppliers , которые с Japan
5. Вывести список продуктов , не с категории Produce
select * from products 
inner join categories 
on products.CategoryID = categories.CategoryID 
where not categories.CategoryName = 'Produce';
6. Вывести список заказов, которые обрабатывал Callahan Laura
select * from Orders inner join employees 
on Orders.EmployeeID = employees.EmployeeID 
where employees.LastName = 'Callahan' and  employees.FirstName = 'Laura';