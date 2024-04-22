SELECT * FROM customer;

SELECT first_name || ' ' || last_name AS full_name
FROM customer;

SELECT DISTINCT create_date
FROM customer;

SELECT *
FROM customer
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT address, phone
FROM address
WHERE district = 'Texas';

SELECT *
FROM film
WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'The Matrix';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Th%';

SELECT film_id, title, description, length, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

SELECT film_id, title, description, length, rental_rate
FROM (
    SELECT film_id, title, description, length, rental_rate,
           ROW_NUMBER() OVER (ORDER BY rental_rate) AS row_num
    FROM film
) ranked_films
WHERE row_num BETWEEN 11 AND 20;

SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.payment_id;

SELECT f.film_id AS "Film ID",
       f.title AS Title,
       f.release_year AS "Release Year",
       f.rating AS Rating,
       f.description AS Description
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.inventory_id IS NULL
ORDER BY f.rating, f.title;











