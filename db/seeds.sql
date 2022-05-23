INSERT INTO
  department (name)
VALUES
  ('Marketing'),
  ('Legal'),
  ('Operations');

INSERT INTO
  role (title, salary, department_id)
VALUES
  ('Analyst', 70000.0, 1),
  ('Senior Analyst', 80000.0, 1),
  ('Manager', 90000.0, 1),
  ('Analyst', 75000.0, 2),
  ('Senior Analyst', 85000.0, 2),
  ('Manager', 95000.0, 2),
  ('Analyst', 80000.0, 3),
  ('Senior Analyst', 90000.0, 3),
  ('Manager', 100000.0, 3);

INSERT INTO
  employee (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 3, NULL),
  ('Jack', 'London', 6, NULL),
  ('Robert', 'Bruce', 9, NULL),
  ('Peter', 'Greenaway', 1, 1),
  ('Derek', 'Jarman', 2, 1),
  ('Paolo', 'Pasolini', 1, 1),
  ('Heathcote', 'Williams', 2, 1),
  ('Sandy', 'Powell', 1, 1),
  ('Emil', 'Zola', 4, 2),
  ('Sissy', 'Coalpits', 5, 2),
  ('Antoinette', 'Capet', 4, 2),
  ('Samuel', 'Delany', 5, 2),
  ('Tony', 'Duvert', 4, 2),
  ('Dennis', 'Cooper', 7, 3),
  ('Monica', 'Bellucci', 8, 3),
  ('Samuel', 'Johnson', 7, 3),
  ('John', 'Dryden', 8, 3),
  ('Alexander', 'Pope', 7, 3);