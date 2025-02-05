import { Avatar, Button, Card, Col, Collapse, Empty, Flex, Image, List, Popover, Progress, Row, Space, Statistic, Tag, Timeline, Tooltip } from "antd";
import SectionHeader from "./SectionHeader";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { AppstoreOutlined, ArrowRightOutlined, BranchesOutlined, BugOutlined, CalendarOutlined, CaretRightFilled, CheckCircleFilled, DoubleRightOutlined, ExportOutlined, FieldTimeOutlined, HeatMapOutlined, IdcardOutlined, MinusOutlined, PlayCircleFilled, PullRequestOutlined, PushpinOutlined, QuestionCircleOutlined, RightCircleOutlined, RightOutlined, RightSquareFilled, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import DateFormat from "../utils/DateFormat";

export default function WorkExperienceOverview({ workExperience }) {

    const [activeKeys, setActiveKeys] = useState([]);

    const createAvatarName = (projectTitle) => {
        let words = projectTitle.split(' ');

        let initials = words.map(word => word.charAt(0).toUpperCase()).join('');

        return initials;
    }

    const formatValue = (value) => {
        if (value >= 1_000_000_000) {
            return (value / 1_000_000_000).toFixed(1) + 'Bi';
        } else if (value >= 1_000_000) {
            return (value / 1_000_000).toFixed(1) + 'Mi';
        } else if (value >= 1_000) {
            return (value / 1_000).toFixed(1) + 'k';
        } else {
            return value.toString();
        }
    }

    const handleCollapseChange = (keys) => {
        setActiveKeys(keys)
    };

    return (
        <Flex vertical>
            <Row gutter={[8, 8]}>
                <Col span={24}>
                    <Flex align="start" justify="center" gap={'middle'}>
                        <Avatar shape="square" size={64} src={workExperience.companyLogoUrl} />
                        <Flex vertical flex={1}>
                            <Title level={4} style={{ margin: 0 }}>{workExperience.company}</Title>
                            <Paragraph type='secondary' style={{ margin: 0 }}>{workExperience.role}</Paragraph>
                            <Flex align="center" justify="start" gap={'large'}>
                                <Flex align="center" justify="space-between" gap={'small'}>
                                    <PushpinOutlined />
                                    <Paragraph className="small" style={{ margin: 0 }} ellipsis={{ rows: 1, expandable: false, symbol: '...' }}>{workExperience.location}</Paragraph>
                                </Flex>
                                <Flex align="center" justify="space-between" gap={'small'}>
                                    <CalendarOutlined />
                                    <Flex align="center" justify="stretch" gap={'small'} >
                                        <DateFormat dateString={workExperience.startDate} />
                                        <ArrowRightOutlined />
                                        <DateFormat dateString={workExperience.endDate} />
                                    </Flex>
                                </Flex>
                            </Flex>
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
                        <List grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }} dataSource={workExperience.projects} renderItem={(project) => (
                            <List.Item>
                                <Card bordered>

                                    <Row gutter={[16, 16]}>

                                        <Col span={24}>
                                            <Flex align="start" justify="stretch" gap={'middle'}>
                                                {project.media.projectLogo.length > 0 ?
                                                    <Avatar shape="square" size={'large'} src={project.media.projectLogo} /> : <Avatar shape="square" size={'large'} icon={<IdcardOutlined />} />
                                                }
                                                <Flex vertical flex={1} justify="center">
                                                    <Title style={{ margin: 0 }} level={4}>{project.name}</Title>
                                                    <Paragraph type="secondary" style={{ margin: 0 }}>{project.category}</Paragraph>
                                                </Flex>
                                                <Tooltip title={'Visitar'}>
                                                    <Button type="icon" icon={<ExportOutlined />} src={project.website} target="_blank" rel="noopener noreferrer" />
                                                </Tooltip>
                                            </Flex>
                                        </Col>

                                        <Col span={24}>
                                            <Flex vertical gap={'small'}>
                                                <Paragraph ellipsis={{ rows: 4, expandable: true, symbol: 'Ver mais.' }}>{project.description}</Paragraph>
                                            </Flex>
                                        </Col>

                                        <Col span={24} style={{ padding: 0 }}>

                                            <Flex vertical gap={'small'}>

                                                <Collapse
                                                    collapsible="header"
                                                    ghost
                                                    key={project.id}
                                                    defaultActiveKey={activeKeys}
                                                    items={[{
                                                        key: 1,
                                                        label: 'Ferramentas Utilizadas',
                                                        children:
                                                            <Row gutter={[16, 16]}>
                                                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                    {project.tools.technologies &&
                                                                        <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }} >
                                                                            <Space direction="horizontal" align="center" size={'middle'}>
                                                                                <Title level={5}>Tecnologias</Title>
                                                                            </Space>

                                                                            <Flex gap={'small'} wrap>{
                                                                                project.tools.technologies.map((tech, index) => (
                                                                                    <Tag key={index}>{tech}</Tag>
                                                                                ))
                                                                            }
                                                                            </Flex>
                                                                        </Flex>
                                                                    }
                                                                </Col>
                                                                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                    {project.tools.applications &&
                                                                        <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }} >
                                                                            <Space direction="horizontal" align="center" size={'middle'}>
                                                                                <Title level={5}>Apps</Title>
                                                                            </Space>

                                                                            <Flex vertical gap={'large'} wrap>{
                                                                                project.tools.applications.map((app, index) => (
                                                                                    <Flex key={index} align="center" gap={'middle'}>
                                                                                        {
                                                                                            app.logo ?
                                                                                                <Image preview={false} src={app.logo} width={'2rem'} />
                                                                                                : <Avatar shape="square" icon={<AppstoreOutlined />} size={'large'} />
                                                                                        }

                                                                                        <Flex vertical flex={1}>
                                                                                            <Title level={5} style={{ margin: 0 }}>{app.name}</Title>
                                                                                            <Paragraph type="secondary" style={{ margin: 0 }}>{app.description}</Paragraph>
                                                                                        </Flex>
                                                                                    </Flex>
                                                                                ))
                                                                            }
                                                                            </Flex>
                                                                        </Flex>
                                                                    }
                                                                </Col>
                                                            </Row>
                                                    }, {
                                                        key: 2,
                                                        label: 'Atuação',
                                                        children:
                                                            <Row gutter={[16, 16]}>

                                                                <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>

                                                                    <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }}>
                                                                        <Flex align="center" justify="space-between" gap={'small'}>
                                                                            <Title level={5}>Estatísticas</Title>
                                                                            {project.time.tasks.caption &&
                                                                                <Popover content={<Paragraph>{project.time.tasks.caption}</Paragraph>}
                                                                                    title={project.time.tasks.title} trigger={'hover'}>
                                                                                    <Button size="small" type="icon" shape='circle' icon={<QuestionCircleOutlined />} />
                                                                                </Popover>
                                                                            }
                                                                        </Flex>

                                                                        <Row gutter={[8, 8]}>

                                                                            <Col xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                <Statistic style={{ flex: 1 }} prefix={<PullRequestOutlined />} title='Tasks Entregues' value={project.time.tasks.tasksDelivered} />
                                                                            </Col>

                                                                            <Col xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                <Statistic style={{ flex: 1 }} prefix={<FieldTimeOutlined />} title='Atuação no Projeto' value={project.time.totalPlayed} />
                                                                            </Col>

                                                                            <Col xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                <Statistic style={{ flex: 1 }} prefix={<UserOutlined />} title='Alcance do Projeto' value={formatValue(project.reach)} />
                                                                            </Col>

                                                                            <Col xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                <Statistic style={{ flex: 1 }} title='Dimensões do Projeto' value={project.dimension} />
                                                                            </Col>

                                                                        </Row>

                                                                    </Flex>

                                                                </Col>

                                                                <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>

                                                                    <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }}>

                                                                        <Flex align="center" justify="space-between" gap={'small'}>
                                                                            <Title level={5} style={{ flex: 1 }}>Balanço de Tempo</Title>
                                                                            {project.time.spent.caption &&
                                                                                <Popover content={<Paragraph>{project.time.spent.caption}</Paragraph>} title={'Balanço de Tempo'} trigger={'hover'}>
                                                                                    <Button size="small" type="icon" shape='circle' icon={<QuestionCircleOutlined />} />
                                                                                </Popover>
                                                                            }
                                                                        </Flex>

                                                                        <Flex gap={'small'} vertical>
                                                                            {project.time.spent.values ? project.time.spent.values.map((time, index) => (
                                                                                <Row gutter={[8, 8]} key={index}>
                                                                                    <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                        <Tag key={index} color={time.color}>{time.name}</Tag>
                                                                                    </Col>
                                                                                    <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                                                                        <Progress strokeColor={time.color} key={index} percent={time.value} />
                                                                                    </Col>
                                                                                </Row>
                                                                            )) : <Empty description='Sem dados disponíveis no momento.' />}
                                                                        </Flex>

                                                                    </Flex>

                                                                </Col>

                                                            </Row>
                                                    }]}
                                                    onChange={handleCollapseChange} />

                                            </Flex>

                                        </Col>

                                        <Col span={24}>
                                            {project.media.projectImages && project.media.projectImages.length > 0 &&
                                                <Flex vertical gap={'small'} style={{ padding: '1rem 0 1rem 0' }}>
                                                    <Flex align="center" justify="space-between" gap={'small'}>
                                                        <Title level={5}>Galeria</Title>
                                                    </Flex>
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
                                                                dataSource={project.media.projectImages}
                                                                renderItem={(image) => (
                                                                    <Card hoverable bordered style={{ overflow: 'hidden', borderRadius: '1rem', margin: '.5rem' }} bodyStyle={{ padding: 0 }}>
                                                                        <Image key={image.pictureUrl} width={'100%'} src={image.pictureUrl} />
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