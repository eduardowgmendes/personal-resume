import { ArrowRightOutlined, MinusOutlined, RightOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Flex, Grid, Layout, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import SectionHeader from "./SectionHeader";
import DatesFormat from "../utils/DateFormat";
import DateFormat from "../utils/DateFormat";

const {useBreakpoint} = Grid;

export default function WorkExperience({ workExperience }) {
    
    const screens = useBreakpoint();    

    return (
        <Layout>
            <SectionHeader title={'Work Experience'} />
            {workExperience.map((experience, index) => (
                <Card bordered style={{ margin: '0 0 .5rem 0' }} key={index}>

                    <Flex gap={'large'} align="center" justify="space-between">


                        <Row gutter={[8, 8]}>

                            <Col span={24}>
                            <a href={experience.companyWebsite}>
                                <Avatar shape="square" size='large' src={experience.companyLogoUrl} />
                            </a>
                            </Col>

                            <Col xs={{span: 24}} sm={{span: 16}} md={{span: 16}} xl={{span: 16}} xxl={{span: 16}}>
                                
                                <Flex vertical align="start" justify="space-between" style={{height: '100%'}}>
                                    <Title level={4} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{experience.role}</Title>
                                    <Title level={5} type="secondary" ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ margin: 0, lineHeight: '1rem' }}>{experience.company}</Title>
                                </Flex>

                            </Col>

                            <Col xs={{span: 24}} sm={{span: 8}} md={{span: 8}} xl={{span: 8}} xxl={{span: 8}}>
                                <Flex vertical align={screens.xs ? "start" : "end"} justify="center" gap={'middle'}>
                                    <Paragraph style={{ margin: 0, textAlign: 'end' }}>{experience.location}</Paragraph>
                                    <Flex gap={'small'} align="center" justify="space-between" style={{ textAlign: 'end' }}>
                                        <DateFormat dateString={experience.startDate} />
                                        <MinusOutlined />
                                        <DateFormat dateString={experience.endDate} />
                                    </Flex>
                                </Flex>
                            </Col>

                            <Col xs={24} sm={24} md={24} xl={24} xxl={24} style={{margin: '1rem 0 1rem 0'}}>
                                <Paragraph type="secondary" ellipsis={{ rows: 5, expandable: false, symbol: '...' }} style={{ margin: 0 }}>{experience.description}</Paragraph>
                            </Col>

                        </Row>

                    </Flex>


                </Card>
            ))}
        </Layout>
    )
}