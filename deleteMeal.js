import sql from "better-sqlite3";

const db = sql("meals.db");

db.prepare(`
DELETE FROM meals 
WHERE slug IN ('test1','testt','delicious');
`).run();

console.log("Test meals deleted successfully");