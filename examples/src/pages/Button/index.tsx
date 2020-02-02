import React from 'react';
import { Button } from '../../../../lib';
import CodeCard from '../../components/CodeCard';
import './index.scss';

const ExampleButton = () => {
	return <div className='example-button'>
		<CodeCard
			title='基本用法'
			code={`
				<Button className='marginRight10'>Default</Button>
	      <Button type='primary' className='marginRight10'>Primary</Button>
	      <Button type='dashed' className='marginRight10'>Dashed</Button>
	      <Button type='danger' className='marginRight10'>Danger</Button>
	      <Button type='link' className='marginRight10'>Link</Button>
	      <Button type='link' className='marginRight10'>
	        <span>Hello World</span>
				</Button>
			`}
		>
			<Button className='marginRight10'>Default</Button>
			<Button type='primary' className='marginRight10'>Primary</Button>
			<Button type='dashed' className='marginRight10'>Dashed</Button>
			<Button type='danger' className='marginRight10'>Danger</Button>
			<Button type='link' className='marginRight10'>Link</Button>
			<Button type='link' className='marginRight10'>
				<span>Hello World</span>
			</Button>
		</CodeCard>

		<CodeCard
			title='Size大小'
			style={{ marginTop: 30 }}
			code={`
				<Button size='small' className='marginRight10'>Default</Button>
				<Button size='default' type='primary' className='marginRight10'>Primary</Button>
				<Button size='large' className='marginRight10'>Dashed</Button>
			`}
		>
			<Button size='small' className='marginRight10'>Default</Button>
			<Button size='default' type='primary' className='marginRight10'>Primary</Button>
			<Button size='large' className='marginRight10'>Dashed</Button>
		</CodeCard>
	</div>;
};

export default ExampleButton;
