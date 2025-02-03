import { Avatar, Badge, Button, Card, Col, Collapse, Divider, Empty, Flex, Image, Layout, List, Progress, Row, Space, Statistic, Tag, Timeline, Tooltip } from "antd";
import SectionHeader from "./SectionHeader";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
import { BookOutlined, BranchesOutlined, CalendarOutlined, CheckCircleFilled, CiOutlined, CodeOutlined, DatabaseOutlined, EditOutlined, EllipsisOutlined, ExportOutlined, FieldTimeOutlined, HeartOutlined, IdcardOutlined, LinkOutlined, PauseCircleFilled, PauseCircleOutlined, PlayCircleFilled, PlayCircleOutlined, PlusCircleOutlined, RightOutlined, SettingOutlined, StopOutlined } from "@ant-design/icons";
import DateFormat from "../utils/DateFormat";
import Panel from "antd/es/splitter/Panel";

export default function WorkExperienceOverview({ workExperience }) {

    const createAvatarName = (projectTitle) => {
        let words = projectTitle.split(' ');

        let initials = words.map(word => word.charAt(0).toUpperCase()).join('');

        return initials;
    }

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <Flex vertical>
            <Row gutter={[8, 8]}>
                <Col span={24}>
                    <Flex align="center" justify="start" gap={'middle'}>
                        <Avatar shape="square" size={'large'} src={workExperience.companyLogoUrl} />
                        <Flex vertical flex={1}>
                            <Title level={4} style={{ margin: 0 }}>{workExperience.company}</Title>
                            <Title level={5} type='secondary' style={{ margin: 0 }}>{workExperience.role}</Title>
                        </Flex>
                    </Flex>
                </Col>

                <Col span={24}>
                    <Flex align={'center'} justify={'center'} gap={'large'} style={{ padding: '1rem 0 1rem 0' }}>
                        <Paragraph>{workExperience.description}</Paragraph>
                    </Flex>
                </Col>

                <Col span={24}>
                    <SectionHeader title={'Atuou em'} />
                    {workExperience.projects ?
                        <List grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} dataSource={workExperience.projects} renderItem={(item) => (
                            <List.Item>
                                <Card bordered>

                                    <Row gutter={[16, 16]}>

                                        <Col span={24}>
                                            <Flex align="center" justify="stretch" gap={'middle'}>
                                                <Avatar shape="square" size={'large'} icon={<IdcardOutlined />} />
                                                <Flex vertical flex={1} justify="center">
                                                    <Title style={{ margin: 0 }} level={4}>{item.name}</Title>
                                                    <Paragraph type="secondary" style={{ margin: 0 }}>{item.category}</Paragraph>
                                                </Flex>
                                                <Tooltip title={'Visitar'}>
                                                    <Button type="icon" icon={<ExportOutlined />} src={item.website} />
                                                </Tooltip>
                                            </Flex>
                                        </Col>

                                        <Col span={24}>
                                            <Flex vertical>
                                                <Paragraph>{item.description}</Paragraph>
                                            </Flex>
                                        </Col>

                                        <Col span={24}>

                                            <Collapse
                                                size="small"

                                                collapsible="header"
                                                defaultActiveKey={['1']}
                                                items={[{
                                                    key: 1, label: ' Ver Detalhes',
                                                    children: <Row gutter={[16, 16]}>

                                                        <Col span={24}>
                                                            <Flex vertical style={{ padding: '1rem 0 1rem 0' }}>
                                                                <Space direction="horizontal" align="center" size={'middle'}>
                                                                    <Title level={5} type="secondary">Tecnologias</Title>
                                                                </Space>

                                                                {item.technologies ?
                                                                    <Flex gap={'small'} wrap>{
                                                                        item.technologies.map((tech, index) => (
                                                                            <Tag key={index}>{tech}</Tag>
                                                                        ))
                                                                    }
                                                                    </Flex>
                                                                    : <Empty description='No tech available.' />}
                                                            </Flex>
                                                        </Col>

                                                        <Col span={24}>

                                                            <Row gutter={[16, 16]}>

                                                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>

                                                                    <Flex vertical style={{ padding: '1rem 0 1rem 0' }}>
                                                                        <Space direction="horizontal" align="center" size={'middle'}>
                                                                            <Title level={5} type="secondary">Estatísticas</Title>
                                                                        </Space>

                                                                        <Flex gap={'large'}>
                                                                            <Statistic prefix={<BranchesOutlined />} title='Tasks Entregues' value={item.time.tasksDelivered} />
                                                                            <Statistic prefix={<FieldTimeOutlined />} title='Atuação no Projeto' value={item.time.timePlayed} />
                                                                        </Flex>
                                                                    </Flex>

                                                                </Col>

                                                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }} xl={{ span: 16 }} xxl={{ span: 16 }}>

                                                                    <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }}>

                                                                        <Space direction="horizontal" align="center" size={'middle'}>
                                                                            <Title level={5} type="secondary">Balanço de Tempo</Title>
                                                                        </Space>

                                                                        <Flex gap={'small'} vertical>
                                                                            {item.time.timeSpent ? item.time.timeSpent.map((time, index) => (
                                                                                <Row gutter={[8, 8]}>
                                                                                    <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                                                                                        <Tag key={index} color={time.color}>{time.name}</Tag>
                                                                                    </Col>
                                                                                    <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                                                                                        <Progress strokeColor={time.color} key={index} percent={time.value} />
                                                                                    </Col>
                                                                                </Row>
                                                                            )) : <Empty description='' />}
                                                                        </Flex>
                                                                    </Flex>
                                                                </Col>

                                                            </Row>

                                                        </Col>

                                                    </Row>
                                                }]}
                                                onChange={onChange} />

                                        </Col>

                                        <Col span={24}>
                                            {item.media.projectImages && item.media.projectImages.length > 0 &&
                                                <Flex vertical style={{ padding: '1rem 0 1rem 0' }}>
                                                    <Space direction="horizontal" align="center" size={'middle'}>
                                                        <Title level={5} type="secondary">Galeria</Title>
                                                    </Space>
                                                    <Flex align="center" justify="center">
                                                        <Image.PreviewGroup>
                                                            <List
                                                                grid={{
                                                                    gutter: [16, 16],
                                                                    xs: 2,
                                                                    sm: 2,
                                                                    md: 4,
                                                                    lg: 4,
                                                                    xl: 4,
                                                                    xxl: 4,
                                                                }}
                                                                dataSource={item.media.projectImages}
                                                                renderItem={(image, index) => (
                                                                    <Card hoverable bordered style={{ overflow: 'hidden', borderRadius: '1rem', margin: '.5rem' }} bodyStyle={{ padding: 0 }}>
                                                                        <Image key={index} width={'100%'} src={image.pictureUrl} />
                                                                    </Card>
                                                                )}
                                                            />
                                                        </Image.PreviewGroup>

                                                    </Flex>
                                                </Flex>
                                            }
                                        </Col>

                                    </Row>

                                </Card>
                            </List.Item >
                        )
                        } />
                        :
                        <Empty description='Nenhum projeto encontrado.' />}
                </Col >

                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} >
                    <Flex vertical gap={'large'}>
                        <SectionHeader title={'Vínculo'} />
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
                    <Flex vertical gap={'large'}>
                        <SectionHeader title={'Também atuou em'} />
                        {workExperience.alsoWorkedOn && workExperience.alsoWorkedOn.length > 0 ?
                            <List size="small" grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} dataSource={workExperience.alsoWorkedOn} renderItem={(item) => (
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
                    </Flex>
                </Col>

                <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                    <Flex vertical justify="start" gap={'large'}>
                        <SectionHeader title={'Achievements'} />

                        {workExperience.achievements && workExperience.achievements.length > 0 ?
                            workExperience.achievements.map((achievement) => (
                                <Flex align="center" justify="start" gap={'middle'}>
                                    <Flex vertical justify='center' size={'small'} flex={1} wrap >
                                        <Paragraph style={{ margin: 0 }}>{achievement.name}</Paragraph>
                                        <Paragraph type="secondary" style={{ margin: 0 }}>{achievement.description}</Paragraph>
                                    </Flex>
                                </Flex>
                            )) : <Flex align="center" justify="space-between" gap={'middle'} style={{ padding: '1rem 0 1rem 0' }}><Empty description='Nenhum achievement encontrado.' /></Flex>}
                    </Flex>
                </Col>

            </Row >
        </Flex >
    )
}