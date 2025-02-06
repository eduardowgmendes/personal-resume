import { Avatar, Card, Col, Flex, Grid, Row, Tooltip } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import DateFormat from "../utils/DateFormat";
import { MinusOutlined, ShopOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

export default function KanbamItem({ workExperience, showModal }) {

    const screens = useBreakpoint();

    return (
        <Card
            bordered
            hoverable
            size="small"
            onClick={() => showModal(workExperience)}>

            <Flex gap={'small'} align="center" justify="center">
                <Row gutter={[8, 8]}>
                    <Col span={24} style={{ marginBottom: '1rem' }}>
                        <Tooltip title={`Visitar ${workExperience.company}`}>
                            {workExperience.companyLogoUrl ?
                                <a href={workExperience.companyWebsite} target="_blank" rel="noopener noreferrer">
                                    <Avatar shape="square" size='large' src={workExperience.companyLogoUrl} />
                                </a> : <a href={workExperience.companyWebsite} target="_blank" rel="noopener noreferrer">
                                    <Avatar shape="square" size='large' icon={<ShopOutlined />} />
                                </a>
                            }
                        </Tooltip>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                        <Flex vertical justify="center" style={{ height: '100%' }}>
                            <Title level={5} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{workExperience.role}</Title>
                            <Title level={5} type="secondary" ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0, lineHeight: '1rem' }}>{workExperience.company}</Title>
                        </Flex>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                        <Flex vertical justify={"center"} gap={'middle'}>
                            <Paragraph style={{ margin: 0 }}>{workExperience.location}</Paragraph>
                            <Flex gap={'small'}>
                                <DateFormat dateString={workExperience.startDate} />
                                <MinusOutlined />
                                <DateFormat dateString={workExperience.endDate} />
                            </Flex>
                        </Flex>
                    </Col>

                    <Col xs={24} sm={24} md={24} xl={24} xxl={24} style={{ margin: '1rem 0 1rem 0' }}>
                        <Paragraph type="secondary" ellipsis={{ rows: 3, expandable: true, symbol: 'Ver mais.' }} style={{ margin: 0 }}>{workExperience.description}</Paragraph>
                    </Col>
                </Row>
            </Flex>
        </Card>
    )
}