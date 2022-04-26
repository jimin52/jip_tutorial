import { pool } from '../mysql'

export const search = async (
  page: number,
  limit: number,
) => {
  const sql = `
  SELECT * FROM book 
  LEFT JOIN book_info 
  ON book.infoId = book_info.id
  LIMIT ?
  OFFSET ?;
  `;
  const data = await pool.query(sql, [limit, limit * page]);
  const book_list = JSON.parse(JSON.stringify(data[0]));
  return { book_list }
}