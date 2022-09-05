import { TextInput as TextField, TextInputProps } from '@mantine/core';
import { useStyles } from './text-input.styles';

const TextInput = (props: TextInputProps) => {
  const { classes } = useStyles();
  return (
    <TextField
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      {...props}
    />
  );
};

export default TextInput;
