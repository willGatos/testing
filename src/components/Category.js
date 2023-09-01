import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

export default function Category({ category }) {
  return (
    <Link href={`/categories/${category._id}`}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">{category.name}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}