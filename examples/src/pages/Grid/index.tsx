import React, { ReactNode } from 'react';
import CodeShow from '../../components/CodeCard';
import { Row, Col } from '../../../../lib';
import { useWindowSize } from '../../../../lib/hooks';
import './index.scss';

const DemoBox = (
  { children, value }: { children: ReactNode; value: number }
) => <div style={{ height: value, backgroundColor: '#0092ff', color: '#fff', textAlign: 'center', lineHeight: `${value}px` }}>{children}</div>;

export default function ExampleGrid() {
  const size = useWindowSize();
  const style: React.CSSProperties = {
    backgroundColor: '#0092ff',
    textAlign: 'center',
    height: '60px',
    lineHeight: '60px',
    color: '#fff'
  };
  return (
    <div className='example-grid'>
      <CodeShow
        style={{ marginBottom: 30 }}
        title='基本用法'
      >
        <>
          <Row style={{ marginBottom: 20 }}>
            <Col className='example-grid-col light' span={24}>
              col
            </Col>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <Col className='example-grid-col light' span={12}>
              col-12
            </Col>
            <Col className='example-grid-col dark' span={12}>
              col-12
            </Col>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <Col className='example-grid-col light' span={8}>
              col-8
            </Col>
            <Col className='example-grid-col dark' span={8}>
              col-8
            </Col>
            <Col className='example-grid-col light' span={8}>
              col-8
            </Col>
          </Row>
          <Row style={{ marginBottom: 20 }}>
            <Col className='example-grid-col light' span={6}>
              col-6
            </Col>
            <Col className='example-grid-col dark' span={6}>
              col-6
            </Col>
            <Col className='example-grid-col light' span={6}>
              col-6
            </Col>
            <Col className='example-grid-col dark' span={6}>
              col-6
            </Col>
          </Row>
        </>
      </CodeShow>
      <CodeShow
        title='间隔'
        style={{ marginBottom: 30 }}
      >
        <>
          <h2>gutter</h2>
          <Row gutter={16}>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>

          <h2>Responsive, width: {size.width}, height: {size.height}</h2>
          <Row
            style={{ marginTop: 20 }}
            gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}
          >
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>

          <h2>Vertical</h2>
          <Row gutter={[16, { xs: 4, sm: 8, md: 16, lg: 24 }]}>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className='gutter-row' span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>
        </>
      </CodeShow>
      <CodeShow title='排版' style={{ marginBottom: 30 }}>
        <Row justify='start'
             style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
        </Row>
        <Row justify='center'
             style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
        </Row>
        <Row justify='end'
             style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
        </Row>
        <Row justify='space-between'
             style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
        </Row>
        <Row justify='space-around'
             style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
          <Col className='example-grid-col light' span={4}>col-4</Col>
          <Col className='example-grid-col dark' span={4}>col-4</Col>
        </Row>
      </CodeShow>
      <CodeShow
        title='子元素垂直对齐'
      >
        <Row justify='center' align='top' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20 }}>
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
        <Row justify="space-around" align='middle' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20 }}>
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
        <Row justify="space-between" align='bottom' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)' }}>
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
      </CodeShow>
    </div>
  );
}
