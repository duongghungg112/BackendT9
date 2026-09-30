-- CREATE DATABASE nestjs_be;
-- use nestjs_be;
-- create TABLE students (
-- student_id INT PRIMARY KEY,
-- name VARCHAR(100),
-- age INT,
-- major VARCHAR(50)
-- );
-- select * from nestjs_be.students s;
-- insert into nestjs_be.students value (2, 'Thien', '25', 'My Thuat' )
delete from nestjs_be.students where student_id = 2;

insert into nestjs_be.students (student_id, name, age, major)
values
(1, 'Nguyen Van An', 20, 'Cong nghe thong tin'),
(2, 'Tran Minh Anh', 21, 'Kinh te'),
(3, 'Le Hoang Nam', 22, 'Ky thuat phan mem'),
(4, 'Nguyen Ba Quan', 25, 'Ngon Ngu Anh' ),
(5, 'Pham Thu Ha', 20, 'Ngon ngu Anh'),
(6, 'Do Quang Huy', 23, 'Khoa hoc may tinh'),
(7, 'Bui Ngoc Mai', 21, 'Marketing'),
(8, 'Hoang Duc Long', 22, 'Tu dong hoa'),
(9, 'Vu Thanh Linh', 20, 'Ke toan'),
(10, 'Dang Minh Quan', 24, 'Thiet ke do hoa');
update nestjs_be.students s 
set age = 22 where s.student_id = 2;
update nestjs_be.students s 
set major = 'Khoa hoc du lieu' where s.student_id = 6;
