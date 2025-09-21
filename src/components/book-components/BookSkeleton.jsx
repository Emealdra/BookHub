import { Box, Skeleton, Card, CardContent } from '@mui/material'

export default function BookSkeleton({ showTrending = false }) {
  return (
    <Card sx={{ width: 280, height: 350, flex: '0 0 calc(16.666% - 16px)' }}>
      <Skeleton variant="rectangular" height={180} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 180px)', p: 2 }}>
        <Skeleton variant="text" height={28} sx={{ mb: 1 }} />
        <Skeleton variant="text" height={20} width="80%" sx={{ mb: 1 }} />
        <Skeleton variant="text" height={20} width="60%" sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: showTrending ? 'space-between' : 'flex-end', alignItems: 'center', mt: 2 }}>
          {showTrending && (
            <Skeleton variant="rounded" width={100} height={24} />
          )}
          <Skeleton variant="rounded" width={60} height={20} />
        </Box>
      </CardContent>
    </Card>
  )
}