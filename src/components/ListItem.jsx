import { Avatar, Card, Col, Flex, Grid, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import DateFormat from "../utils/DateFormat";
import { MinusOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

export default function ListItem({ workExperience, showModal }) {
    
    const screens = useBreakpoint();

    return (
        <Card
            bordered
            hoverable
            onClick={() => showModal(workExperience)}>

            <Flex gap={'large'} align="center" justify="space-between">
                <Row gutter={[8, 8]}>
                    <Col span={24} style={{ marginBottom: '1rem' }}>
                        <a href={workExperience.companyWebsite}>
                            <Avatar shape="square" size='large' src={workExperience.companyLogoUrl} />
                        </a>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                        <Flex vertical align="start" justify="space-between" style={{ height: '100%' }}>
                            <Title level={4} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{workExperience.role}</Title>
                            <Title level={5} type="secondary" ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0, lineHeight: '1rem' }}>{workExperience.company}</Title>
                        </Flex>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                        <Flex vertical align={screens.xs ? "start" : "end"} justify="center" gap={'middle'}>
                            <Paragraph style={{ margin: 0, textAlign: 'end' }}>{workExperience.location}</Paragraph>
                            <Flex gap={'small'} align="center" justify="space-between" style={{ textAlign: 'end' }}>
                                <DateFormat dateString={workExperience.startDate} />
                                <MinusOutlined />
                                <DateFormat dateString={workExperience.endDate} />
                            </Flex>
                        </Flex>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24} xxl={24} style={{ margin: '1rem 0 1rem 0' }}>
                        <Paragraph type="secondary" ellipsis={{ rows: 5, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{workExperience.description}</Paragraph>
                    </Col>
                </Row>
            </Flex>
        </Card>
    )
}