import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Rating } from '@mui/material';
import { RiCheckboxCircleFill } from '@remixicon/react';

export default function BottomActionsCard() {
  return (
    <Card
      variant="plain"
      sx={{
        // width: 320,
        // to make the card resizable
        overflow: 'auto',
      }}
    >
      <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '1rem'}}>
        <Avatar src="/static/images/avatar/1.jpg" size="lg" />
        <Box>
          <Rating name="read-only" value={5} readOnly size="small" />
          <Typography level="title-sm" display={'flex'} gap={"0.25rem"}>Ken T. <span className='flex gap-1 items-center text-green-600 text-xs'><RiCheckboxCircleFill className="w-4 h-4" />Verified Customer</span></Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography level="body-sm">
          "As soon as the Calirion arrived i put one in my bedroom. This was late on the afternoon. When i went to the bedroom in the evening smelled clean. when i went to bed i fet i could breather better. Wonderful."
        </Typography>
      </CardContent>
    </Card>
  );
}
