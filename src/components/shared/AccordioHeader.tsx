import { Stack } from "rsuite";
interface AccordionHeaderProps {
  title: string;
}
const AccordioHeader = (props: AccordionHeaderProps) => {
  const { title } = props;
  return (
    <Stack spacing={10} alignItems="flex-start">
      <Stack spacing={2} direction="column" alignItems="flex-start">
        <div>{title}</div>
      </Stack>
    </Stack>
  );
};

export default AccordioHeader;
