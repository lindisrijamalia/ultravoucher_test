select
t1.id,
t1.name,
t2.name AS parent_name
from
another_table t1

LEFT JOIN

another_table_table t2 ON t1.parent_id = t2.id;