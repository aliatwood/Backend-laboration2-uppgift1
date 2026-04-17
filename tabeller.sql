/* Mina tabeller */

/* workexperience(id(pk), companyName, jobTitle, location, startDate, endDate, description) */
create table workexperience(
    id integer not null,
    companyName varchar(30) not null,
    jobTitle varchar(25) not null,
    location varchar(30) not null,
    startDate Date not null,
    endDate Date not null,
    description varchar(200) not null
);