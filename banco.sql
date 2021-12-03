CREATE TABLE "comics" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "cover_date" date NOT NULL,
  "added_date" datetime NOT NULL,
  "updated_date" datetime DEFAULT NULL,
  "cover_image" varchar(255) DEFAULT NULL,
  "description" longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  "author" bigint not null,
  PRIMARY KEY ("id")
)

CREATE TABLE "author" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "added_date" datetime NOT NULL,
  "updated_date" datetime DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "profile_img_url" varchar(255) DEFAULT NULL,
  PRIMARY KEY ("id")
)



CREATE TABLE "categories" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "added_date" datetime NOT NULL,
  "updated_date" datetime DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "is_enabled" tinyint DEFAULT NULL,
  PRIMARY KEY ("id")
)

CREATE TABLE "users" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "added_date" datetime NOT NULL,
  "updated_date" datetime DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "password" varchar(255) DEFAULT NULL,
  "email" varchar(255) DEFAULT NULL,
  PRIMARY KEY ("id")
)

CREATE TABLE "user_comics_collection" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "added_date" datetime NOT NULL,
  "comic_id" bigint DEFAULT NULL,
  "user_id" bigint DEFAULT NULL,
  PRIMARY KEY ("id")
)

ALTER TABLE user_comics_collection
ADD FOREIGN KEY (comic_id) REFERENCES comics(id);

ALTER TABLE user_comics_collection
ADD FOREIGN KEY (user_id) REFERENCES users(id);

CREATE TABLE "comic_author" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "added_date" datetime NOT NULL,
  "comic_id" bigint DEFAULT NULL,
  "author_id" bigint DEFAULT NULL,
  PRIMARY KEY ("id")
)

ALTER TABLE comic_author
ADD FOREIGN KEY (comic_id) REFERENCES comics(id);

ALTER TABLE comic_author
ADD FOREIGN KEY (author_id) REFERENCES author(id);

CREATE TABLE "comic_categories" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "added_date" datetime NOT NULL,
  "comic_id" bigint DEFAULT NULL,
  "category_id" bigint DEFAULT NULL,
  PRIMARY KEY ("id")
)

ALTER TABLE comic_categories
ADD FOREIGN KEY (comic_id) REFERENCES comics(id);

ALTER TABLE comic_categories
ADD FOREIGN KEY (category_id) REFERENCES categories(id);