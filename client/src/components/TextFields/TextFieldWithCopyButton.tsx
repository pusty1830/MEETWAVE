import React from 'react';
import { TextField, IconButton, styled } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface TextFieldWithCopyProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  onCopy?: () => void;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
}

// Styled component for the wrapper div to handle the copy button positioning
const TextFieldWrapper = styled('div')({
  position: 'relative',
  width: '100%'
});

const TextFieldWithCopy: React.FC<TextFieldWithCopyProps> = ({
  value,
  onChange,
  error = false,
  helperText = '',
  onCopy = () => {},
  disabled = false,
  name = 'textField',
  placeholder = 'Click The Button Below To Generate Meeting ID'
}) => {
  return (
    <TextFieldWrapper>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        disabled={disabled}
        name={name}
        margin="normal"
        InputProps={{
          endAdornment: (
            <IconButton
              edge="end"
              onClick={onCopy}
              disabled={disabled}
              sx={{
                color: '#3cacae',
                '&:hover': {
                  backgroundColor: 'rgba(60, 172, 174, 0.04)'
                }
              }}
            >
              <ContentCopyIcon />
            </IconButton>
          ),
          sx: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? 'error.main' : 'rgba(0, 0, 0, 0.23)'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? 'error.main' : '#3cacae'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? 'error.main' : '#3cacae'
            }
          }
        }}
      />
    </TextFieldWrapper>
  );
};

export default TextFieldWithCopy;