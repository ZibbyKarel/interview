import { Story } from '@storybook/react';
import { Table, TableProps } from './Table';

export const Default: Story<TableProps> = (args) => <Table {...args} />;

export default {
	title: 'Components/Table',
	component: Table,
	args: {
		headers: [...new Array(5)].map((item, i) => `Header ${i}`),
		rows: [...new Array(10)].map((item, i) => [...new Array(5)].map((item, j) => `Row ${i} Cell ${j}`)),
	},
};
