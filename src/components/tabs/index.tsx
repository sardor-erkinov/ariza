import { TabsProps, Tabs as UnstyledTabs } from '@mantine/core';
import { useStyles } from './tabs.styles';

interface UnstyledTabProps extends TabsProps {
  space?: string;
}

const Tabs = (props: UnstyledTabProps) => {
  const { classes } = useStyles({ space: props.space });
  return (
    <UnstyledTabs
      variant="unstyled"
      classNames={{
        body: classes.body,
        root: classes.root,
        tabActive: classes.tabActive,
        tabControl: classes.tabControl,
        tabInner: classes.tabInner,
        tabLabel: classes.tabLabel,
        tabsList: classes.tabsList,
        tabsListWrapper: classes.tabsListWrapper,
      }}
      {...props}
    />
  );
};

export default Tabs;
