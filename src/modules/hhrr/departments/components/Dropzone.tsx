import { Box, Typography } from '@mui/material'
import { PRIMARY } from 'modules/core/consts/theme'
import React, { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadFileIcon from '@mui/icons-material/UploadFile'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: PRIMARY,
  borderStyle: 'dashed',
  backgroundColor: '#fff',
  color: '#1d1d1d',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const focusedStyle = {
  borderColor: PRIMARY
}

const acceptStyle = {
  borderColor: '#00e676'
}

const rejectStyle = {
  borderColor: '#ff1744'
}

export function Dropzone() {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: { 'image/*': [] } })

  const style: any = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ])

  return (
    <Box py={4}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Box py={.5}>
          <UploadFileIcon sx={{ color: PRIMARY }} />
        </Box>
        <Typography component='p' fontSize={15}>
          Drag and drop a Profile Picture
        </Typography>
        <Typography color={PRIMARY} fontSize={14}>
          SVG, PNG, JPG {`(max. 5MB)`}
        </Typography>
      </div>
    </Box>
  )
}