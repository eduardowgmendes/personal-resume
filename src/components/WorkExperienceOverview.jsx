import { Avatar, Button, Card, Col, Divider, Empty, Flex, Image, Layout, List, Progress, Row, Space, Statistic, Timeline } from "antd";
import SectionHeader from "./SectionHeader";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
import { BookOutlined, CalendarOutlined, CheckCircleFilled, CodeOutlined, DatabaseOutlined, EditOutlined, EllipsisOutlined, HeartOutlined, PauseCircleFilled, PauseCircleOutlined, PlayCircleFilled, PlayCircleOutlined, RightOutlined, SettingOutlined, StopOutlined } from "@ant-design/icons";
import DateFormat from "../utils/DateFormat";

export default function WorkExperienceOverview({ workExperience }) {

    const createAvatarName = (projectTitle) => {
        let words = projectTitle.split(' ');

        let initials = words.map(word => word.charAt(0).toUpperCase()).join('');

        return initials;
    }

    return (
        <Flex vertical>
            <Row gutter={[8, 8]}>
                <Col span={24}>
                    <Flex align="center" justify="start" gap={'middle'}>
                        <Avatar shape="square" size={'large'} src={workExperience.companyLogoUrl} />
                        <Flex vertical flex={1}>
                            <Title level={2} style={{ margin: 0 }}>{workExperience.company}</Title>
                            <Title level={4} type='secondary' style={{ margin: 0 }}>{workExperience.role}</Title>
                        </Flex>
                    </Flex>
                </Col>


                <Col span={24}>
                    <Flex align={'center'} justify={'center'} gap={'large'}>
                        <Paragraph>{workExperience.description}</Paragraph>
                    </Flex>
                </Col>

                <Col span={24}>
                    <SectionHeader title={'Atuou em'} />
                    {workExperience.projects ?
                        <List grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 3, xxl: 3 }}  dataSource={workExperience.projects} renderItem={(item) => (
                            <List.Item>
                                <Card 
                                hoverable
                                bordered 
                                bodyStyle={{padding: 0}}>    
                                <Flex vertical>
                                    <div style={{ 
                                        height: '16rem', 
                                        background: `url('${item.media.projectCover}')`, 
                                        backgroundPosition: 'center', 
                                        backgroundSize: 'cover'}}>
                                            
                                    </div>
                                    <Flex vertical style={{padding: '1rem'}}>
                                        <Title level={5}>{item.name}</Title>
                                        <Paragraph ellipsis={{rows: 4, expandable: false, symbol: 'Ver mais'}} type='secondary'>{item.description}</Paragraph>
                                    </Flex>
                                </Flex>
                                </Card>
                            </List.Item>
                        )} />
                        :
                        <Empty description='Nenhum projeto encontrado.' />}
                </Col>

                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} >
                    <SectionHeader title={'Vínculo'} />
                    <Flex vertical align="stretch" justify="center" gap={'large'} style={{ padding: '2rem 0 1rem 0' }}>

                        <Timeline mode='left' items={[
                            {
                                dot: <PlayCircleFilled />,
                                children: `Iniciado em ${workExperience.startDate}`,
                                color: 'springgreen',
                            },
                            {
                                dot: <CheckCircleFilled style={{ color: 'springgreen' }} />,
                                children: `Finalizado em ${workExperience.endDate}`,
                                color: 'crimsom',
                            }
                        ]} />

                    </Flex>
                </Col>

                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <SectionHeader title={'Também atuou em'} />                  
                    {workExperience.alsoWorkedOn && workExperience.alsoWorkedOn.length > 0 ?
                            <List size="small" grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}  dataSource={workExperience.alsoWorkedOn} renderItem={(item) => (
                                <List.Item>
                                    <Flex align="center" justify="space-between" gap={'middle'}>
                                    {item.media.projectLogo ?
                                        <Avatar size={'small'} src={item.media.projectLogo} />
                                        :
                                        <Avatar size={'small'}>{createAvatarName(item.name)}</Avatar>
                                    }
    
                                    <Flex vertical justify='center' size={'small'} flex={1} wrap >
                                        <Paragraph style={{ margin: 0 }}>{item.name}</Paragraph>
                                        <Paragraph type="secondary" style={{ margin: 0 }}>{item.description}</Paragraph>
                                    </Flex>
                                </Flex>
                                </List.Item>
                            )} /> : <Flex align="center" justify="space-between" gap={'middle'} style={{ padding: '1rem 0 1rem 0' }}><Empty description='Nenhum projeto encontrado.' /></Flex>}
                </Col>

                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <SectionHeader title={'Achievements'} />
                    
                    {workExperience.achievements && workExperience.achievements.length > 0 ?
                        workExperience.achievements.map((achievement) => (
                            <Flex align="center" justify="start" gap={'middle'} style={{ padding: '1rem 0 1rem 0' }}>
                                <Flex vertical justify='center' size={'small'} flex={1} wrap >
                                    <Paragraph style={{ margin: 0 }}>{achievement.name}</Paragraph>
                                    <Paragraph type="secondary" style={{ margin: 0 }}>{achievement.description}</Paragraph>
                                </Flex>
                            </Flex>
                        )) : <Flex align="center" justify="space-between" gap={'middle'} style={{ padding: '1rem 0 1rem 0' }}><Empty description='Nenhum achievement encontrado.' /></Flex>}
                </Col>

            </Row>
        </Flex>
    )
}